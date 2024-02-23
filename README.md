### Nested dynamic routes with Expo Router

This is a test to learn and understand how to handle multiple nested dynamic routes in Expo Router (v3). I didn't find
any information in the official Expo Router documentation.

This the routes structure of the test.

- \_layout (app)
    - \_layout (devices)
    - index
    - \[deviceId]
        - index
        - \_layout (edit)
            - index
            - \[settingId]
                - index
- index ---> first default page
- profile

---

- The `index` page is the default first page explored by Expo Router.
- You don't need to specify the index route because it has the same navigation path of the directory in which it's
  located.
