using Marten;
using System.Security.Claims;

namespace LinkedOutApi;

public class UserService
{
    private readonly IHttpContextAccessor _contextAccessor;
    private readonly IDocumentSession _documentSession;

    public UserService(IHttpContextAccessor contextAccessor, IDocumentSession documentSession)
    {
        _contextAccessor = contextAccessor;
        _documentSession = documentSession;
    }

    public async Task<Guid> GetUserIdAsync()
    {
        // a "map" from the subject to a user id for us.
        var sub = _contextAccessor.HttpContext?.User.Claims.SingleOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
        if (sub is null)
        {
            throw new Exception("User Service Can only be used in authenticated endpoints");
        }

        // see if we already "know" this person.
        var user = await _documentSession.Query<User>().SingleOrDefaultAsync(u => u.Sub == sub.Value);
        // if they have, we will return their "local" user Id (Guid)
        if (user is not null)
        {
            return user.Id;
        }
        else
        {
            var newUser = new User(Guid.NewGuid(), sub.Value);
            _documentSession.Store(newUser);
            await _documentSession.SaveChangesAsync();
            return newUser.Id;
        }

    }
}

public record User(Guid Id, string Sub);