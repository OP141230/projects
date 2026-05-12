// Hotel data
var hotels = [
  {
    id: 1,
    name: "The Grand Palace",
    city: "Mumbai",
    stars: 5,
    price: 4500,
    image: "https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=400&q=80",
    description: "Luxury stay in the heart of the city."
  },
  {
    id: 2,
    name: "Sunset Inn",
    city: "Goa",
    stars: 3,
    price: 1800,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
    description: "Cozy rooms with beautiful beach views."
  },
  {
    id: 3,
    name: "Mountain View Resort",
    city: "Shimla",
    stars: 4,
    price: 3200,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80",
    description: "Peaceful retreat surrounded by mountains."
  },
  {
    id: 4,
    name: "City Comfort Hotel",
    city: "Delhi",
    stars: 3,
    price: 2200,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    description: "Affordable and central location in Delhi."
  },
  {
    id: 5,
    name: "Royal Heritage Hotel",
    city: "Jaipur",
    stars: 5,
    price: 5500,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80",
    description: "Experience royal Rajasthani hospitality."
  },
  {
    id: 6,
    name: "Lake Side Lodge",
    city: "Udaipur",
    stars: 4,
    price: 3900,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80",
    description: "Stunning views of the lake from every room."
  }
];

// Keep track of which hotel is being booked
var selectedHotel = null;

// Show all hotels on page load
window.onload = function() {
  showHotels(hotels);
};

// Build star string
function getStars(count) {
  var stars = "";
  for (var i = 0; i < count; i++) {
    stars += "★";
  }
  for (var j = count; j < 5; j++) {
    stars += "☆";
  }
  return stars;
}

// Display hotel cards
function showHotels(list) {
  var grid = document.getElementById("hotelGrid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = "<p style='text-align:center; color:#888; width:100%;'>No hotels found. Try a different city.</p>";
    return;
  }

  for (var i = 0; i < list.length; i++) {
    var h = list[i];
    var card = document.createElement("div");
    card.className = "hotel-card";
    card.innerHTML =
      '<img src="' + h.image + '" alt="' + h.name + '" onerror="this.src=\'https://via.placeholder.com/300x180?text=Hotel\'" />' +
      '<div class="hotel-info">' +
        '<h3>' + h.name + '</h3>' +
        '<p class="location">📍 ' + h.city + '</p>' +
        '<p class="stars">' + getStars(h.stars) + '</p>' +
        '<p style="font-size:13px; color:#666; margin-bottom:10px;">' + h.description + '</p>' +
        '<p class="price">₹' + h.price + ' <span>/ night</span></p>' +
        '<button onclick="openModal(' + h.id + ')">Book Now</button>' +
      '</div>';
    grid.appendChild(card);
  }
}

// Search hotels by city
function searchHotels() {
  var city = document.getElementById("cityInput").value.trim().toLowerCase();
  var checkIn = document.getElementById("checkIn").value;
  var checkOut = document.getElementById("checkOut").value;

  // Basic validation
  if (checkIn && checkOut && checkIn >= checkOut) {
    alert("Check-out date must be after check-in date!");
    return;
  }

  var filtered = hotels;

  if (city !== "") {
    filtered = hotels.filter(function(h) {
      return h.city.toLowerCase().includes(city);
    });
  }

  showHotels(filtered);

  // Scroll to results
  document.getElementById("hotels").scrollIntoView({ behavior: "smooth" });
}

// Open booking modal
function openModal(hotelId) {
  for (var i = 0; i < hotels.length; i++) {
    if (hotels[i].id === hotelId) {
      selectedHotel = hotels[i];
      break;
    }
  }

  document.getElementById("modalHotelName").textContent =
    "Hotel: " + selectedHotel.name + " — ₹" + selectedHotel.price + "/night";

  // Clear previous values
  document.getElementById("bookingName").value = "";
  document.getElementById("bookingEmail").value = "";
  document.getElementById("bookingPhone").value = "";

  document.getElementById("bookingModal").style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
  selectedHotel = null;
}

// Confirm booking
function confirmBooking() {
  var name = document.getElementById("bookingName").value.trim();
  var email = document.getElementById("bookingEmail").value.trim();
  var phone = document.getElementById("bookingPhone").value.trim();

  if (name === "" || email === "" || phone === "") {
    alert("Please fill in all the fields!");
    return;
  }

  // Simple email check
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Close modal
  closeModal();

  // Show success message
  var msg = document.getElementById("successMsg");
  msg.style.display = "block";

  // Hide after 4 seconds
  setTimeout(function() {
    msg.style.display = "none";
  }, 4000);
}

// Contact form message
function sendMessage() {
  alert("Thanks for reaching out! We will get back to you soon. 😊");
}
