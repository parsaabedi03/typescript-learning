// basic enum
enum Status {
  START = "start",
  DONE = "done",
  CANCEL = "cancel",
}
let userStatus: Status = Status.START;
// numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);

// enum as types
enum UserStatus {
  START = "start",
  DONE = "done",
  CANCEL = "cancel",
}

let currentStatus: UserStatus;

currentStatus = UserStatus.START;
currentStatus = UserStatus.DONE;
currentStatus = UserStatus.CANCEL;

// real world example
enum StatusCode {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}
// enum in objects
enum UserRole {
  ADMIN = "admin",
  USER = "user",
  EDITOR = "editor",
}

type User = {
  id: number;
  name: string;
  role: UserRole;
};

const user: User = {
  id: 1,
  name: "Parsa",
  role: UserRole.ADMIN,
};

// enum in function

function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.START:
      return "Todo has started";

    case Status.DONE:
      return "Todo is completed";

    case Status.CANCEL:
      return "Todo has been cancelled";
  }
}
