// "use strict"
// currentFilter = "active";

const userService = {
  currentFilter: "active",
  users: [
    { name: "John", status: "active" },
    { name: "Jane", status: "inactive" },
    { name: "Bob", status: "active" }
  ],
  getFilteredUsers: function() {
    return this.users.filter(function(user) {
      return user.status === this.currentFilter;
    });
  },
}

console.log(userService.getFilteredUsers());
