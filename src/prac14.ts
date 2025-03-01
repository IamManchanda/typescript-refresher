const userRoles = ["admin", "editor", "viewer"] as const;
type Role = typeof userRoles[number]; // enum

function setRole(role: Role) {
  console.log(`User role is ${role}`);
}

setRole("admin");
setRole("editor");
setRole("viewer");
