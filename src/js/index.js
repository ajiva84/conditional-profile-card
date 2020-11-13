import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log(
    `"These are the current variables: ${variables.name} "`,
    variables
  ); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  variables.avatarURL =
    "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s320x320/67964582_2329615054020024_710734551101472768_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=BYjg1ElTPTsAX8CSbzj&_nc_tp=25&oh=aae1a31a1ffdcb12d8dfff0151dae5cd&oe=5FD78D4C";
  variables.background =
    "https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/118471801_748904155888310_3842231648044288454_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=i9K5WWWYjiYAX9YRv5s&tp=15&oh=98a600deeefbe9941759576ff6a9fef2&oe=5FD66EB8";
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}</h1>
          <h2>${variables.role}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/${variables.twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
