$("#tweet-submit").hide();
$("#char-count").hide();
$(".tweet-actions").hide();
$(".stats").hide();
$(".reply").hide();


$(".tweet-compose").on("click", function(){
  $("button").show();  $("#char-count").show();
  $(this).css({"height": "5em"})
});
// function charCount() {
//  var remaining = 140 - $(".tweet-compose").val().length;
//  $("#char-count").text(remaining);
// }
function charCount() {
 var remaining = 140 - $(".tweet-compose").val().length;
 $("#char-count").text(remaining);
 if(remaining <= 10) {
  $("#char-count").css({"color": "red"})
 }
 else  if(remaining > 10 && remaining <= 140) {
 	$("#char-count").css({"color": "#999"})
 }
}
$(".tweet-compose").on("keyup", charCount);

function disableTweet() {
	var remaining = 140 - $(".tweet-compose").val().length;
	if(remaining < 0) {
		$("#tweet-submit").hide();
	}
	else {
		$("#tweet-submit").show();
	}
}
// $(".tweet-compose").on("keyup", disableTweet)
// function createTweet() {
// 	<div id="profile-summary">
// 					<div class="content">
// 						<img class='avatar' src='img/alagoon.jpg' />
// 						<p>John Hancock</p>
// 					</div>
// 				</div>
// 	var myTweet = $(".tweet").clone()
// }

// $(".tweet-compose").prepend("#stream")

$("#tweet-submit").on('click', function(){
	//var storeText = $(".tweet-compose").val();
	var tweetTemplate = $(".tweet:first").clone(true);
	var newAvt = $("#dashboard").find(".avatar").attr("src");
	var newName = $("#dashboard").find(".content p").text();
	var newUserName = "@johnhancock";
	tweetTemplate.find(".avatar").prop("src", newAvt);
	tweetTemplate.find(".fullname").html(newName);
	tweetTemplate.find(".username").html(newUserName);
	tweetTemplate.find(".content p").html($(".tweet-compose").val());
    $("#stream").prepend(tweetTemplate);
    $(".tweet-compose").val("");
  });

$(".tweet").hover(
  function () {
    $(".tweet-actions").show();
  },
  function () {
    $(".tweet-actions").hide();
  });

// $(".tweet").click(
//  $(".tweet").find($(".reply")).show();
//  $(this).show();



// $(".avatar").on("click", function(){
//   $(".reply").show();
// 	},
// 	$(".reply").hide()
// 	});

// BREAKS IT $("#stream").find(".tweet").hover(
// function() {
//  $(this).hide();
// },
// function() {
// $(".tweet").show();
// });

$(".tweet").on("click", function(){
	if($(this).find(".stats").is(":hidden") && $(this).find(".reply").is(":hidden")){
		$(this).find(".stats").slideDown("slow");
		$(this).find(".reply").slideDown("slow");
	}
	else{
		$(this).find(".stats").slideUp("slow");
		$(this).find(".reply").slideUp("slow");
	}
});
// $("#stream").prepend($("#profile-summary").clone());

// $(document).on("click", ".tweet-actions li:nth-child(2)", function() {
// 	console.log("retweeted")
// 	$(this).closest(".content").find(".action-retweet").show();
// })

