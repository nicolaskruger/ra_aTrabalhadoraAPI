import { test } from "vitest"
import { user_reply_type } from "../../src/dto/user.dto"

// npx vitest test -t 'create user'
test('create user', async () => {
  try {
    const body = JSON.stringify({
      name: "ni",
      mail: "ni@mail.com"
    }
    )
    const response = await fetch("http://localhost:8080/user", {
      headers: { 'Content-Type': 'application/json', },
      method: "POST",
      body: body
    })
    const user: user_reply_type = await response.json();
    console.log("👍", user)

  }
  catch (e) {
    console.log("👎", "something on the wind", e)
  }
})
