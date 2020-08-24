function ckeckPersonalData(){
    var name = $('#name').val();
    var birthday = $('#birthday').val();
    var sex = $('#sex').val();
    var invitedUnit = $('#invitedUnit').val();
    var offCampusUnit = $('#offCampusUnit').val();
    var event = $('#event').val();
    var evenDateStart = $('#evenDateStart').val();
    var evenDateEnd = $('#evenDateEnd').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    if(name !== ""){
        alert("請填入姓名");
    } else if(evenDateStart > evenDateEnd){
        alert("於本校參與活動(公務)期程的結束日期不可早於起始日期");
    } else if(birthday == ""){
        alert("請填入出生日期");
    } else if(sex == ""){
        alert("請填入性別");
    } else if(invitedUnit == ""){
        alert("請填入本校邀請系所/單位");
    } else if(offCampusUnit == ""){
        alert("請填入校外單位/公司名稱");
    } else if(event == ""){
        alert("請填入前來本校參與之活動(公務)名稱");
    } else if(evenDateStart == ""){
        alert("請填入於本校參與活動(公務)期程的起始日期");
    } else if(evenDateEnd == ""){
        alert("請填入於本校參與活動(公務)期程的結束日期");
    } else if(phone == ""){
        alert("請填入手機");
    } else if(email == ""){
        alert("電子信箱");
    }
}

function checkquerydate(){
    var answer1 = $("input[name='answer1']:checked").val();
    var enteredFrom = $("#enteredFrom").val();
    var transitFrom = $("#transitFrom").val();
    var enteredDate = $("#enteredDate").val();
    var transitDate = $("#transitDate").val();

    if(answer1 == undefined){
        alert("請填選第一題");
    }else if(answer1 == "y"){
        if((enteredFrom == "" || enteredDate == "")&&(transitFrom == "" || transitDate == "")){
            alert("請至少填選第二題中的一個小題，並確認有選擇日期");
        } else if(enteredFrom == "" || enteredDate == ""){
            $("#enteredFrom").val("");
            $("#enteredDate").val("");
        } else if(transitFrom == "" || transitDate == ""){
            $("#transitFrom").val("");
            $("#transitDate").val("");
        }
    }

}

function getValueOfCheckbox(name){

}