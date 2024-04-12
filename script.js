function toggleNav() {
  let navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active"); 
}

window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.news');
  console.log(window.scrollY);
  if (window.scrollY > 121) {
    navbar.classList.add('news-fix');
  } else {
    navbar.classList.remove('news-fix');
  }
});

const min = 10000;
const max = 100000;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

let cards_information = [
  {
    name: "Marathon Fundraiser",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Marathon_Fundraiser.jpg",
    url_img: "./card_images/Marathon_Fundraiser.jpg",
    likes: Math.floor(randomNum * 0.11),
    content: "Join us for a day of fitness and philanthropy at our Marathon Fundraiser! Lace up your running shoes or grab your walking gear to participate in our marathon event. Whether you're a seasoned runner or just enjoy a leisurely stroll, everyone is welcome to join in and raise funds for a great cause. Gather pledges from friends, family, and colleagues as you cover miles for charity. Together, we can make a difference, one step at a time."
  },
  {
    name: "Art Auction",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Art_Auction.jpg",
    url_img: "./card_images/Art_Auction.jpg",
    likes: Math.floor(randomNum * 0.5),
    content: "Step into a world of creativity and compassion at our Art Auction! Immerse yourself in an evening filled with stunning artworks generously donated by local artists. From paintings to sculptures, there's something for every art enthusiast to admire and bid on. Every winning bid not only brings a beautiful piece of art into your home but also contributes to supporting vital charitable initiatives in our community. Let's paint a brighter future together."
  },
  {
    name: "Benefit Concert",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Benefit_Concert.jpg",
    url_img: "./card_images/Benefit_Concert.jpg",
    likes: Math.floor(randomNum * 0.2),
    content: "Get ready to groove for a good cause at our Benefit Concert! Join us for a night of incredible performances by talented local musicians and bands, all coming together to support charity. From soulful melodies to rocking rhythms, our concert promises an unforgettable experience for music lovers of all ages. Purchase your tickets today and help us raise funds to make a meaningful impact in the lives of those in need."
  },
  {
    name: "Sports Tournament",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Sports_Tournament.jpg",
    url_img: "./card_images/Sports_Tournament.jpg",
    likes: Math.floor(randomNum * 0.3),
    content: "Calling all sports enthusiasts! Gather your teammates and gear up for our Sports Tournament fundraiser. Whether you're dribbling on the basketball court, kicking goals in soccer, or spiking in volleyball, there's a game for everyone to enjoy. Compete against other teams in friendly matches, all while raising funds to support important charitable causes. Let the games begin as we score big for charity!"
  },
  {
    name: "Cook-Off Competition",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Cook-Off_Competition.jpg",
    url_img: "./card_images/Cook-Off_Competition.jpg",
    likes: Math.floor(randomNum * 0.9),
    content: "Bring your culinary skills to the forefront and spice up your support for charity at our Cook-Off Competition! Whether you're a master chef or an amateur cook, everyone is welcome to showcase their signature dishes and compete for the title of Cook-Off Champion. Taste delectable creations, cast your votes, and join us in raising funds to nourish our community in more ways than one."
  },
  {
    name: "Fashion Show",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Fashion_Show.jpg",
    url_img: "./card_images/Fashion_Show.jpg",
    likes: Math.floor(randomNum * 0.56),
    content: "Strut down the runway for a cause at our Fashion Show fundraiser! Experience an evening of glamour and style as local designers showcase their latest collections. From elegant couture to cutting-edge streetwear, our fashion show promises to dazzle and inspire. Purchase your tickets to witness the beauty of fashion while supporting charitable initiatives that make a difference in the lives of many."
  },
  {
    name: "Trivia Night",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Trivia_Night.jpg",
    url_img: "./card_images/Trivia_Night.jpg",
    likes: Math.floor(randomNum * 0.7),
    content: "Test your knowledge and show your support at our Trivia Night fundraiser! Gather your friends, form a team, and prepare for a battle of wits as we tackle trivia questions spanning various topics. From pop culture to history, there's something for everyone to enjoy. With prizes to be won and funds to be raised, it's a night of fun and philanthropy that you won't want to miss."
  },
  {
    name: "Charity Gala",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Charity_Gala.jpg",
    url_img: "./card_images/Charity_Gala.jpg",
    likes: Math.floor(randomNum * 0.3),
    content: "Elevate your evening for a noble cause at our Charity Gala fundraiser! Join us for a sophisticated affair filled with elegance, entertainment, and philanthropy. Indulge in a gourmet dinner, bid on exclusive auction items, and dance the night away to live music. With every ticket purchased, you're not only treating yourself to a memorable night out but also making a meaningful difference in the lives of those in need."
  },
  {
    name: "Pet Adoption Event",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Pet_Adoption_Event.jpg",
    url_img: "./card_images/Pet_Adoption_Event.jpg",
    likes: Math.floor(randomNum * 0.65),
    content: "Find your furry friend and support animal welfare at our Pet Adoption Event! Join us as we partner with local animal shelters to showcase adorable pets in need of loving homes. Whether you're looking for a playful puppy, a cuddly kitten, or a loyal companion, there's a perfect match waiting for you. Adopt, donate, or simply spread the word to help us give these animals a second chance at happiness."
  },
  {
    name: "Environmental Cleanup",
    url_usr: "",
    time: "1 month",
    url_usr_img: "./card_images/Environmental_Cleanup.jpg",
    url_img: "./card_images/Environmental_Cleanup.jpg",
    likes: Math.floor(randomNum * 0.18),
    content: "Roll up your sleeves and join us in making a positive impact on our planet at our Environmental Cleanup event! Gather your friends, family, and community members to participate in a day of hands-on conservation efforts. From picking up litter to planting trees, every action we take helps protect and preserve our environment for future generations. Together, let's roll back the damage and pave the way for a cleaner, greener world."
  }
]

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledCards = shuffleArray(cards_information);
let i = 0;
shuffledCards.slice(0, 3).forEach(option => {
  i++;
  $('#information-cards').append(`
      <div class="instagram-card">
          <div class="instagram-card-header">
              <img src="${option.url_usr_img}" class="instagram-card-user-image" />
              <a class="instagram-card-user-name" href="${option.url_usr}">${option.name}</a>
              <div class="instagram-card-time">${option.time}</div>
          </div>

          <div class="instagram-card-image">
              <img src="${option.url_img}">
          </div>

          <div class="instagram-card-content">
              <p class="likes footer-icons">
                  <ion-icon class="fa-heart${i}" name="heart-outline"></ion-icon>
                  ${option.likes}
                  <ion-icon class="fa-comment${i}" name="chatbubble-outline"></ion-icon> 
                  <ion-icon class="fa-paper-plane${i}" name="paper-plane-outline"></ion-icon>
              </p>
              <p>${option.content}</p>
          </div>
      </div>
  `);
});
