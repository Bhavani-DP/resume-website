$(document).ready(function () { const hour = new Date().getHours(); let greeting = "Hello";
if (hour < 12) greeting = "Good morning";

else if (hour < 17) greeting = "Good afternoon"; else greeting = "Good evening";
$('#greeting').text(`${greeting}, Bhavani!`);

 
   function updateTime() {
const now = new Date();
const timeString = now.toLocaleTimeString();
$('#current-time').text(timeString);
}
updateTime();


setInterval(updateTime, 1000);
$('#email').on('blur', function () { const email = $(this).val();
if (email.includes('@gechassan.ac.in')) {
$('#course').val('CSE');
alert('CSE auto-selected based on your college domain!');
}
});
$('#name, #email, #course').on('input change', function () {
$('#prevName').text($('#name').val());
$('#prevEmail').text($('#email').val());
$('#prevCourse').text($('#course').val());
$('#preview').fadeIn();
});
$('#regForm').on('submit', function (e) { e.preventDefault();
$.ajax({
 
      
url: 'submit.php', type: 'POST',
data: $(this).serialize(), success: function (response) {
$('#result').html(response);
$('#regForm')[0].reset();
$('#preview').hide();

confetti({ particleCount: 100,
spread: 70, origin: { y: 0.6 }
});
},
error: function () {
$('#result').html("<p style='color:red;'>Something went wrong. Please try again.</p>");
}
});
});
});
