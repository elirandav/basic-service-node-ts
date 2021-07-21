
_"I get paid for code that works, not for tests, so my philosophy is to test as little as possible to reach a given level of confidence...."_

**Kent Beck**


### Part 2

Hints:

- Side-effects - Any source of inputs or outputs for a method that are not part of the arguments or return value

**Requirement 1:** call 3rd party service

Create a new account, when creating a new user. for user id x, the 3rd party request:
```
POST /account
body {userId: x}
```

**Requirement 2:** get users via CLI

get users with the following command:

`<CLI> GET`

**Requirement 3:** when getting users the full name length should be less than 10

Examples:

1. first: '1234567890111' , last: '' => first: '1234567890' , last: ''
1. first: '123' , last: '4567890111' => first: '123' , last: '4567890'
1. first: '' , last: '1234567890111' => first: '' , last: '1234567890'

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NvbnRyb2xsZXJdIC0tPkJbU2VydmljZV1cbiAgICBCW1NlcnZpY2VdIC0tPkNbUmVwb3NpdG9yeV1cbiAgIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NvbnRyb2xsZXJdIC0tPkJbU2VydmljZV1cbiAgICBCW1NlcnZpY2VdIC0tPkNbUmVwb3NpdG9yeV1cbiAgIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6dHJ1ZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

**Where to start?**

- Create a new class/method and imagine the integration?
- Emerge the code for a user request? Integration test
