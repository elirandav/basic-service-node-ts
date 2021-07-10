![img](readme-resources/tdd-cycle.png)


### Part 1 
To start building something, we need to have requirements. Build the following APIs:

```
GET /users

response: 
[{first: 'Zehava', last: 'Ben'},{first: 'Kobi', last: 'Oz'}]
```

```
POST /users

body: 
{first: 'Yuval', last: 'Levi'}
```

**Assumptions**

- We already have a typescript express server template with sequelize.
- Skip end to end tests. 

[![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NvbnRyb2xsZXJdIC0tPkJbU2VydmljZV1cbiAgICBCW1NlcnZpY2VdIC0tPkNbUmVwb3NpdG9yeV1cbiAgIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)](https://mermaid-js.github.io/mermaid-live-editor/edit##eyJjb2RlIjoiZ3JhcGggVERcbiAgICBBW0NvbnRyb2xsZXJdIC0tPkJbU2VydmljZV1cbiAgICBCW1NlcnZpY2VdIC0tPkNbUmVwb3NpdG9yeV1cbiAgIiwibWVybWFpZCI6IntcbiAgXCJ0aGVtZVwiOiBcImRlZmF1bHRcIlxufSIsInVwZGF0ZUVkaXRvciI6dHJ1ZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

**Terminology** (only for this session)

- Unit test - test only one layer (controller, service or repo).
- Integration test - test more than one layer.
- End to end test - HTTP requests, having the whole environment setup with containers. 

**Where to start?**

We know that we start with test because we are in TDD session :) but what scope/level to test? 

Options to start with:
- Testing each layer (isolated with mocks) with unit tests 
- Use the requirements (given in REST) as test to emerge the controller code while avoiding mocks, which emerge other layers code.

Send this form:
https://docs.google.com/forms/d/e/1FAIpQLSeh45gu6jjIq2Oa2e90XOm61jYem92-T4_ZG7QgEwgorAmGbA/viewform

Some hints:
- docker run --name test-mysql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=pswd -d mysql:8.0.15

If we have time:
- TDD and test-implementation coupling
- Show coverage using `npm tests`
- Show IntelliJ templates 
