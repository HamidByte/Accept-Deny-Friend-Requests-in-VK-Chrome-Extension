

var userNames = [];
var totalFriendsAdded = 0;

// console.log($('#friends_list').find('.friends_field_title').children('a').text())
// console.log($('#friends_list').find('.friends_field_title > a').text())

// function changeColor(element, value) {
//     if (element.css("border") === value) {
//         element.css("border", "")
//       setTimeout(changeColor(element, value), 1000)
//     } else {
//         element.css("border", value)
//       setTimeout(changeColor(element, value), 1000);
//     }
//   }

function selectUser(el) {
    el.addClass("friends_user_row_border");
}

function deselectUser(el) {
    el.removeClass("friends_user_row_border");
}

function addFriends() {
    $('#friends_list > #list_content > .friends_list_bl').find('.friends_user_request').each(function(index) {

        var $this = $(this);
        // var $next = $this.next()

        userNames.push($this.find('.friends_user_info > .friends_field_title').children('a').text())
        var $friendsControls = $this.find('.friends_user_info > .friends_controls')

        // $friendsControls.children('button').addClass("primary_color")
        $friendsControls.children('.FlatButton--primary').css("background-color", "#9147ff")
        $friendsControls.children('.FlatButton--primary').hover(function(e) { 
            $(this).css("background-color", e.type === "mouseenter" ? "#772ce8" : "var(--button_primary_background)") 
        })

        setTimeout(function() {

            console.log(userNames[index], " is selected.");
            selectUser($this);
            $friendsControls.children('.FlatButton--primary').trigger("click")
            
        }, (index) * 1000);

        // Check if friend is added
        var friendsAdded = $friendsControls.filter(function() {
            return !($friendsControls.children().is('.FlatButton--primary'))
        })

        if (friendsAdded) {
            console.log(userNames[index], "request is accepted.");
            deselectUser($this);
            // $this.click(selectUser($next));
            totalFriendsAdded++;
            // return;
        }

        console.log(totalFriendsAdded, " friends added.")

    });
}

$(document).ready(function() {

    var addAllFriendRequests = $('<input type="button" class="add_requests_btn" id="add_all_friend_requests" value="Accept all requests"/>');
    $("#friends_tabs_wrap").append(addAllFriendRequests);
    
    $("#add_all_friend_requests").on("click", function() {
        addFriends();
    });

});

/* ************************************************** */
/* ************************************************** */

// var parser = new DOMParser();

// $("div.friends_controls").each(function() {

//     var friendsControlsHTML = $(this)[0].innerHTML;
    
//     console.log(friendsControlsHTML)

//     // Accept request HTML
//     var friendsControlsHTMLStr = parser.parseFromString(friendsControlsHTML, 'text/html');
//     var acceptRequestDomNodeObj = $(friendsControlsHTMLStr).find("button.FlatButton--primary")

//     acceptRequestHTMLStr = acceptRequestDomNodeObj[0].outerHTML
//     var acceptRequestAttr = $(acceptRequestHTMLStr).attr("onclick");
//     console.log(acceptRequestAttr)

//     Alternatively

//     // Accept Request
//     let acceptRequestAttr = $(friendsControlsHTML).eq(0).attr("onclick")

//     // Deny Request
//     let denyRequestAttr = $(friendsControlsHTML).eq(1).attr("onclick")

//     // testing
//     $(friendsControls[0].innerHTML).filter('button').each(function() {
//         var singleElementHTML = $(this).html();
//         console.log($(this)[0].innerHTML)

//      });

// });
