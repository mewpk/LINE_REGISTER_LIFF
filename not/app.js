(() => {
    const pictureUrl = document.getElementById("pictureUrl");
function logOut() {
  liff.logout();
  window.location.reload();
}
function logIn() {
  liff.login({ redirectUri: window.location.href });
}
async function getUserProfile() {
  const profile = await liff.getProfile();
  axios.get("https://sheetdb.io/api/v1/3awnhw9icpyqx").then((res) => {
    const dataform = res.data;
    let match = 0;
    for (let i = 0; i < dataform.length; i += 1) {
      if (profile.userId == dataform[i].userId) {
        match += 1
      }
    }
    if (match == 0) {
      axios.post("https://sheetdb.io/api/v1/3awnhw9icpyqx", {
        userId: profile.userId,
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });

  pictureUrl.style.display = "block";
  pictureUrl.src = profile.pictureUrl;
}
async function main() {
  await liff.init({ liffId: "1657099044-yKDkw7xX" });
  if (liff.isInClient()) {
    getUserProfile();
  } else {
    if (liff.isLoggedIn()) {
      getUserProfile();
      document.getElementById("btnLogOut").style.display = "block";
    } else {
    //   logIn();
    }
  }
}
main();


var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  var data = new FormData(document.getElementById("sheetdb-form"))
  fetch(form.action, {
    method: "POST",
    body: data,
  }).then(() => {}).then((html) => {
    // you can put any JS code here
    axios.get("https://sheetdb.io/api/v1/udaqidubl8hb3").then(res=>{
      const dataform = res.data;
      let i = dataform.length
      let data = dataform[i-1]
      console.log(data)
      axios.get(`https://script.google.com/macros/s/AKfycbxacJEpL4g37VRODRgGFVZpycB4yAqoiiuVsLFNiEATQksBmJhd_l8b3KnMNChtcRK9/exec?message="${JSON.stringify(data)}"`).then(
      window.location.reload()
      )
    })

    
  });

});
      // notify
    
  
  })();



