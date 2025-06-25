import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  BlogPost: a
    .customType({
      content: a.string(),
    }),
    addBlogPost: a
    .mutation()
    .arguments({
      id: a.id(),
      title: a.string().required(),
      content: a.string().required(),
    })
    .returns(a.ref("BlogPost"))
    .authorization(allow => [allow.publicApiKey()])
    .handler(
      a.handler.custom({
        dataSource: "ExternalPostTableDataSource",
        entry: "./addBlogPost.js",
      })
    ),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
