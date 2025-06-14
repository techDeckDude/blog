import { util } from "@aws-appsync/utils";
import * as ddb from "@aws-appsync/utils/dynamodb";

export function request(ctx) {
    console.log("sending off the ctx! ", ctx.arguments);
  const item = { ...ctx.arguments};
  const key = { id: ctx.args.id ?? util.autoId() };
  return ddb.put({ key, item });
}

export function response(ctx) {
  return ctx.result;
}