import { server } from "../..";
import { create_user, create_user_type, user_reply, user_reply_type } from "../dto/user.dto";

type server_api = typeof server;

const user_conf = (api: server_api) => {
  console.log("Start: user routes 📺")
  api.post<{ Body: create_user_type, Reply: user_reply_type }>("/user", {
    schema: {
      body: create_user,
      response: {
        201: user_reply
      }
    }
  }, async (request, reply) => {
    const user = request.body;
    const response: user_reply_type = {
      id: Math.random().toString(),
      ...user

    }
    return reply.status(201).send(response)
  })
}

export { user_conf }
