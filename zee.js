document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (name === "" || email === "") {
        document.getElementById("orderMessage").textContent = "Please fill in all fields!";
        document.getElementById("orderMessage").style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("orderMessage").textContent = "Please enter a valid email address.";
        document.getElementById("orderMessage").style.color = "red";
        return;
    }

    document.getElementById("orderMessage").textContent = `Thank you, ${name}! Your order has been placed.`;
    document.getElementById("orderMessage").style.color = "green";
});
