class User {
  constructor(email, name, phone, gender, address) {
    this.email = email;
    this.name = name;
    this.phone = phone;
    this.gender = gender;
    this.address = address;
    this.createdAt = new Date();
    this.id = this.generateId();
  }

  generateId() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
}

class UserManager {
  constructor() {
    this.users = [];
    this.loadUsers();
  }

  addUser(user) {
    this.users.push(user);
    this.saveUsers();
    return true;
  }

  getAllUsers() {
    return this.users;
  }

  searchUsers(query) {
    if (!query) return this.users;

    query = query.toLowerCase();
    return this.users.filter((user) => {
      return (
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.phone.toLowerCase().includes(query) ||
        user.address.toLowerCase().includes(query)
      );
    });
  }

  saveUsers() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  loadUsers() {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      try {
        const parsedUsers = JSON.parse(savedUsers);
        this.users = parsedUsers.map((user) => {
          const newUser = new User(
            user.email,
            user.name,
            user.phone,
            user.gender,
            user.address
          );
          newUser.createdAt = new Date(user.createdAt);
          newUser.id = user.id || newUser.generateId();
          return newUser;
        });
      } catch (e) {
        console.error("Error loading users from localStorage:", e);
        this.users = [];
      }
    }
  }
}

class UIManager {
  constructor(userManager) {
    this.userManager = userManager;
    this.initTabs();
    this.initViewToggle();
    this.initFormValidation();
    this.initSearchFunctionality();

    this.renderUsers();
  }

  initTabs() {
    const addUserTab = document.getElementById("add-user-tab");
    const previewUsersTab = document.getElementById("preview-users-tab");
    const addUserContent = document.getElementById("add-user-content");
    const previewUsersContent = document.getElementById(
      "preview-users-content"
    );

    addUserTab.addEventListener("click", () => {
      this.activateTab(addUserTab, addUserContent);
      this.deactivateTab(previewUsersTab, previewUsersContent);
    });

    previewUsersTab.addEventListener("click", () => {
      this.activateTab(previewUsersTab, previewUsersContent);
      this.deactivateTab(addUserTab, addUserContent);
      this.renderUsers();
    });
  }

  activateTab(tabButton, tabContent) {
    tabButton.classList.add("active");
    tabContent.classList.add("active");
  }

  deactivateTab(tabButton, tabContent) {
    tabButton.classList.remove("active");
    tabContent.classList.remove("active");
  }

  initViewToggle() {
    const tableViewBtn = document.getElementById("table-view-btn");
    const cardViewBtn = document.getElementById("card-view-btn");
    const tableView = document.getElementById("table-view");
    const cardView = document.getElementById("card-view");

    tableViewBtn.addEventListener("click", () => {
      tableViewBtn.classList.add("active");
      cardViewBtn.classList.remove("active");
      tableView.classList.add("active");
      cardView.classList.remove("active");
    });

    cardViewBtn.addEventListener("click", () => {
      cardViewBtn.classList.add("active");
      tableViewBtn.classList.remove("active");
      cardView.classList.add("active");
      tableView.classList.remove("active");
    });
  }

  initSearchFunctionality() {
    const searchInput = document.getElementById("user-search");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      const filteredUsers = this.userManager.searchUsers(query);
      this.renderTableView(filteredUsers);
      this.renderCardView(filteredUsers);
    });
  }

  initFormValidation() {
    const userForm = document.getElementById("user-form");

    userForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const gender = document.getElementById("gender").value;
      const address = document.getElementById("address").value.trim();

      let isValid = true;

      document
        .querySelectorAll(".error-message")
        .forEach((el) => (el.textContent = ""));

      if (!this.validateEmail(email)) {
        document.getElementById("email-error").textContent =
          "Please enter a valid email address";
        this.highlightError("email");
        isValid = false;
      }

      if (!this.validateName(name)) {
        document.getElementById("name-error").textContent =
          "Name must contain only letters";
        this.highlightError("name");
        isValid = false;
      }

      if (!this.validatePhone(phone)) {
        document.getElementById("phone-error").textContent =
          "Phone number must have at least 10 digits";
        this.highlightError("phone");
        isValid = false;
      }

      if (!gender) {
        document.getElementById("gender-error").textContent =
          "Please select a gender";
        this.highlightError("gender");
        isValid = false;
      }

      if (!address) {
        document.getElementById("address-error").textContent =
          "Address cannot be empty";
        this.highlightError("address");
        isValid = false;
      }

      if (isValid) {
        const newUser = new User(email, name, phone, gender, address);
        if (this.userManager.addUser(newUser)) {
          this.showSuccessMessage("User added successfully!");
          userForm.reset();

          setTimeout(() => {
            document.getElementById("preview-users-tab").click();
          }, 1500);
        }
      }
    });

    const inputs = userForm.querySelectorAll("input, select, textarea");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        const errorElement = document.getElementById(`${input.id}-error`);
        if (errorElement && errorElement.textContent) {
          errorElement.textContent = "";
          input.style.borderColor = "";
        }
      });

      input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 0 3px rgba(67, 97, 238, 0.15)";
      });

      input.addEventListener("blur", () => {
        input.style.boxShadow = "";
      });
    });
  }

  highlightError(fieldId) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = "var(--danger)";
    field.focus();
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return name !== "" && nameRegex.test(name);
  }

  validatePhone(phone) {
    const phoneRegex = /^\d+$/;
    return phone.length >= 10 && phoneRegex.test(phone);
  }

  showSuccessMessage(message) {
    const successMessage = document.getElementById("success-message");
    successMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }

  renderUsers() {
    const users = this.userManager.getAllUsers();
    this.renderTableView(users);
    this.renderCardView(users);
  }

  renderTableView(users) {
    const tableBody = document.getElementById("users-table-body");
    const noUsersTable = document.getElementById("no-users-table");

    tableBody.innerHTML = "";

    if (users.length === 0) {
      tableBody.style.display = "none";
      noUsersTable.style.display = "block";
      return;
    }

    tableBody.style.display = "";
    noUsersTable.style.display = "none";

    users.forEach((user, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${user.email}</td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.gender}</td>
        <td>${user.address}</td>

      `;

      tableBody.appendChild(row);
    });
  }

  renderCardView(users) {
    const cardsContainer = document.getElementById("users-cards");
    const noUsersCards = document.getElementById("no-users-cards");

    cardsContainer.innerHTML = "";

    if (users.length === 0) {
      cardsContainer.style.display = "none";
      noUsersCards.style.display = "block";
      return;
    }

    cardsContainer.style.display = "";
    noUsersCards.style.display = "none";

    users.forEach((user, index) => {
      const card = document.createElement("div");
      card.className = "user-card";

      const date = new Date(user.createdAt);
      const formattedDate = date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      card.innerHTML = `
        <h3><i class="fas fa-user-circle"></i> ${user.name}</h3>
        <div class="user-detail">
          <i class="fas fa-envelope"></i>
          <div>
            <span>Email:</span> ${user.email}
          </div>
        </div>
        <div class="user-detail">
          <i class="fas fa-phone"></i>
          <div>
            <span>Phone:</span> ${user.phone}
          </div>
        </div>
        <div class="user-detail">
          <i class="fas fa-venus-mars"></i>
          <div>
            <span>Gender:</span> ${user.gender}
          </div>
        </div>
        <div class="user-detail">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <span>Address:</span> ${user.address}
          </div>
        </div>
        <div class="card-footer">
          <div class="card-date">
            <i class="fas fa-calendar-alt"></i> Added on ${formattedDate}
          </div>
        </div>
      `;

      cardsContainer.appendChild(card);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const userManager = new UserManager();
  const uiManager = new UIManager(userManager);
});

//added a simple search function
//used addEventListener tho we never had it in our class but its easier tbh
//used regex its easier and fast
//used local storage instead of storing it temp so each time i open i need to rewrite the info for testing
//also added the date part , cuz i wanted to add sort function but i do not have time tbh
//querySelectorAll <= this was so useful
//used library for icons to make it look good and presentable
//This is the first thing I put so much into, so long ago
