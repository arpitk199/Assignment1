(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }

    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  

          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }

        }, 0)
    }());



    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
          document.getElementById('slide-up-form').classList.remove('hidden');
          document.getElementById('slide-up-form').style.bottom = '0';
        }, 15000);
      
        document.getElementById('close-btn').addEventListener('click', function () {
            document.getElementById('slide-up-form').style.bottom = '-400px';
            setTimeout(function () {
              document.getElementById('slide-up-form').classList.add('hidden');
            }, 500);
          });
          
        document.getElementById('user-form').addEventListener('submit', function (e) {
          e.preventDefault();
 
          console.log('Phone Number:', document.getElementById('phone').value);
          console.log('Email Address:', document.getElementById('email').value);
          
          document.getElementById('user-form').reset();
        });
      });
      