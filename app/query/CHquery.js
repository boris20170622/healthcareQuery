$(document).ready(function () {
    $("#answer3Other").attr("disabled",true);
    $("#fluScreenDate").attr("disabled",true);
    $("#fluScreenResultOther").attr("disabled",true);
    $("#covid19ScreenDate").attr("disabled",true);
    $("#covid19ScreenResultOther").attr("disabled",true);
    $("#hospital").attr("disabled",true);
    $("input[name='fluScreenResult']").each(function(){
        $(this).attr("disabled",true);
    });
    $("input[name='covid19ScreenResult']").each(function(){
        $(this).attr("disabled",true);
    });

   
    $("input[name='answer1'][value='n']").change(function() {
        if(this.checked){
            $("#enteredFrom").val("");
            $("#enteredDate").val("");
            $("#transitFrom").val("");
            $("#transitDate").val("");
            $("#enteredFrom").attr("disabled",true);
            $("#transitFrom").attr("disabled",true);
            $("#enteredDate").attr("disabled",true);
            $("#transitDate").attr("disabled",true);
        }
    }); 

    $("input[name='answer1'][value='y']").change(function() {
        if(this.checked){
            $("#enteredFrom").attr("disabled",false);
            $("#transitFrom").attr("disabled",false);
            $("#enteredDate").attr("disabled",false);
            $("#transitDate").attr("disabled",false);
        }
    });

    $("input[name='answer3'][value='checkbox1']").change(function() {
        if(this.checked){
            $("input[name='answer3']").each(function(){
                    if($(this).val() != "checkbox1"){
                        $(this).prop("checked",false);
                        $(this).attr("disabled",true);
                    }
            })
            $("#answer3Other").val("");
            $("#answer3Other").attr("disabled",true);
        }else {
            $("input[name='answer3']").each(function(){
                if($(this).val() != "checkbox1"){
                    $(this).attr("disabled",false);
                }
            })
        }
    });

    $("input[name='answer3'][value='checkbox9']").change(function(){
        if(this.checked){
            $("#answer3Other").attr("disabled",false);
        }else {
            $("#answer3Other").val("");
            $("#answer3Other").attr("disabled",true);
        }
    });

    $("input[name='answer4'][value='n']").change(function() {
        if(this.checked){
            $("#answer3Other").val("");
            $("#answer3Other").attr("disabled",true);
            $("#fluScreenDate").val("");
            $("#fluScreenDate").attr("disabled",true);
            $("#fluScreenResultOther").val("");
            $("#fluScreenResultOther").attr("disabled",true);
            $("#covid19ScreenDate").val("");
            $("#covid19ScreenDate").attr("disabled",true);
            $("#covid19ScreenResultOther").val("");
            $("#covid19ScreenResultOther").attr("disabled",true);
            $("#hospital").val("");
            $("#hospital").attr("disabled",true);
            $("input[name='screen']").each(function(){
                $(this).prop("checked",false);
                $(this).attr("disabled",true);
            });
            $("input[name='fluScreenResult']").each(function(){
                $(this).prop("checked",false);
                $(this).attr("disabled",true);
            });
            $("input[name='covid19ScreenResult']").each(function(){
                $(this).prop("checked",false);
                $(this).attr("disabled",true);
            });
        }
    });

    $("input[name='answer4'][value='y']").change(function() {
        if(this.checked){
            $("input[name='screen']").each(function(){
                $(this).attr("disabled",false);
            });
        }
    });

    $("input[name='screen'][value='flu']").change(function(){
        if(this.checked){
            $("#fluScreenDate").attr("disabled",false);
            $("input[name='fluScreenResult']").each(function(){
                $(this).attr("disabled",false);
            });
        } else{
            $("#fluScreenDate").val("");
            $("#fluScreenDate").attr("disabled",true);
            $("#fluScreenResultOther").val("");
            $("#fluScreenResultOther").attr("disabled",true);
            $("input[name='fluScreenResult']").each(function(){
                $(this).prop("checked",false);
                $(this).attr("disabled",true);
            });
        }
        if(this.checked || $("input[name='screen'][value='covid19']").prop('checked')){
            $("#hospital").attr("disabled",false);
        } else{
            $("#hospital").val("");
            $("#hospital").attr("disabled",true);
        }
    });

    $("input[name='fluScreenResult']").change(function(){
        if($("input[name='fluScreenResult'][value='other']").prop('checked')){
            $("#fluScreenResultOther").attr("disabled",false);
        }else {
            $("#fluScreenResultOther").val("");
            $("#fluScreenResultOther").attr("disabled",true);
        }
    });

    $("input[name='screen'][value='covid19']").change(function(){
        if(this.checked){
            $("#covid19ScreenDate").attr("disabled",false);
            $("input[name='covid19ScreenResult']").each(function(){
                $(this).attr("disabled",false);
            });
        } else{
            $("#covid19ScreenDate").val("");
            $("#covid19ScreenDate").attr("disabled",true);
            $("#covid19ScreenResultOther").val("");
            $("#covid19ScreenResultOther").attr("disabled",true);
            $("input[name='covid19ScreenResult']").each(function(){
                $(this).prop("checked",false);
                $(this).attr("disabled",true);
            });
        }
        if(this.checked || $("input[name='screen'][value='covid19']").prop('checked')){
            $("#hospital").attr("disabled",false);
        } else{
            $("#hospital").val("");
            $("#hospital").attr("disabled",true);
        }
    });

    $("input[name='covid19ScreenResult']").change(function(){
        if($("input[name='covid19ScreenResult'][value='other']").prop('checked')){
            $("#covid19ScreenResultOther").attr("disabled",false);
        }else {
            $("#covid19ScreenResultOther").val("");
            $("#covid19ScreenResultOther").attr("disabled",true);
        }
    });

    $("input[name='answer5'][value='n']").change(function(){
        if(this.checked){
            $("#relationship").val("");
            $("#relationship").attr("disabled",true);
            $("#contactDate").val("");
            $("#contactDate").attr("disabled",true);
        }
    });

    $("input[name='answer5'][value='y']").change(function(){
        if(this.checked){
            $("#relationship").attr("disabled",false);
            $("#contactDate").attr("disabled",false);
        }
    });

    $("input[name='answer6'][value='n']").change(function(){
        if(this.checked){
            $("#managementDateStart").val("");
            $("#managementDateStart").attr("disabled",true);
            $("#managementDateEnd").val("");
            $("#managementDateEnd").attr("disabled",true);
            $("input[name='managementType']").each(function(){
                $(this).prop("checked",false);
                $(this).attr("disabled",true);
            });
        }
    });

    $("input[name='answer6'][value='y']").change(function(){
        if(this.checked){
            $("#managementDateStart").attr("disabled",false);
            $("#managementDateEnd").attr("disabled",false);
            $("input[name='managementType']").each(function(){
                $(this).attr("disabled",false);
            });
        }
    });


});

function ckeckPersonalData(){
    var name = $('#name').val();
    var birthday = $('#birthday').val();
    var sex = $("input[name='sex']:checked").val();
    var invitedUnit = $('#invitedUnit').val();
    var offCampusUnit = $('#offCampusUnit').val();
    var event = $('#event').val();
    var evenDateStart = $('#evenDateStart').val();
    var evenDateEnd = $('#evenDateEnd').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    if(name == ""){
        alert("請填入姓名");
    } else if(evenDateStart > evenDateEnd){
        alert("於本校參與活動(公務)期程的結束日期不可早於起始日期");
    } else if(birthday == ""){
        alert("請填入出生日期");
    } else if(sex == undefined){
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
    } else{
        return true;
    }
    return false;
}

function checkQueryDate(){
    var answer1 = $("input[name='answer1']:checked").val();
    var enteredFrom = $("#enteredFrom").val();
    var transitFrom = $("#transitFrom").val();
    var enteredDate = $("#enteredDate").val();
    var transitDate = $("#transitDate").val();
    var answer3 = $("input[name='answer3']:checked").val();
    var answer3Other = $("#answer3Other").val();
    var answer4 = $("input[name='answer4']:checked").val();
    var answer5 = $("input[name='answer5']:checked").val();
    var answer6 = $("input[name='answer6']:checked").val();
    
    if(answer1 == undefined){
        alert("請填選第一題");
        return false;
    }

    if(answer1 == "y"){
        if((enteredFrom == "" || enteredDate == "")&&(transitFrom == "" || transitDate == "")){
            alert("請至少填選第二題中的一個小題，並確認有選擇日期");
            return false;
        } else if(enteredFrom == "" || enteredDate == ""){
            $("#enteredFrom").val("");
            $("#enteredDate").val("");
        } else if(transitFrom == "" || transitDate == ""){
            $("#transitFrom").val("");
            $("#transitDate").val("");
        }
    }
    if(answer3 == undefined){
        alert("請填選第三題，須至少選擇一個選項");
        return false;
    } else if($("input[name='answer3'][value='checkbox9']").prop('checked')){
        if(answer3Other == ""){
            alert("如在第三題有勾選其他，請在後面填入文字");
            return false;
        }
    }
    if(answer4 == undefined){
        alert("請填選第四題");
        return false;
    } else if(answer4 == 'y'){
        var screen=[];
        $("input[name='screen']:checked").each(function(){
            screen.push($(this).val());
        });
        if(screen.length == 0){
            alert("請於至少點選第四題中的其中一種篩檢");
            return false;
        }else if(screen.length == 1 && screen[0] == "flu"){
            var fluScreenResult = $("input[name='fluScreenResult']:checked").val();
            var fluScreenDate = $("#fluScreenDate").val();
            if(fluScreenDate == ""){
                alert("請選取流感快篩的篩檢日期");
                return false;
            } else if(fluScreenResult == undefined){
                alert("請點選流感快篩結果");
                return false;
            } else if(fluScreenResult == 'other' && $("#fluScreenResultOther").val() == ""){
                alert("請瑱入流感快篩結果的其他欄位");
                return false;
            } else if($("#hospital").val() == ""){
                alert("請瑱入篩檢醫院名稱");
                return false;
            }
        }else if(screen.length == 1 && screen[0] == "covid19"){
            var covid19ScreenResult = $("input[name='covid19ScreenResult']:checked").val();
            var covid19ScreenDate = $("#covid19ScreenDate").val();
            if(covid19ScreenDate == ""){
                alert("請選取新冠肺炎喉頭採驗的篩檢日期");
                return false;
            } else if(covid19ScreenResult == undefined){
                alert("請點選新冠肺炎喉頭採驗結果");
                return false;
            } else if(covid19ScreenResult == 'other' && $("#covid19ScreenResultOther").val() == ""){
                alert("請瑱入新冠肺炎喉頭採驗結果的其他欄位");
                return false;
            } else if($("#hospital").val() == ""){
                alert("請瑱入篩檢醫院名稱");
                return false;
            }
        }else {
            var fluScreenResult = $("input[name='fluScreenResult']:checked").val();
            var fluScreenDate = $("#fluScreenDate").val();
            var covid19ScreenResult = $("input[name='covid19ScreenResult']:checked").val();
            var covid19ScreenDate = $("#covid19ScreenDate").val();
            if(fluScreenDate == "" || covid19ScreenDate == ""){
                alert("請選取流感快篩或新冠肺炎喉頭採驗的篩檢日期");
                return false;
            } else if(fluScreenResult == undefined || covid19ScreenResult == undefined){
                alert("請點選流感快篩或新冠肺炎喉頭採驗結果");
                return false;
            } else if((fluScreenResult == 'other' && $("#fluScreenResultOther").val() == "") || (covid19ScreenResult == 'other' && $("#covid19ScreenResultOther").val() == "")){
                alert("請瑱入流感快篩結果或新冠肺炎喉頭採驗的其他欄位");
                return false;
            } else if($("#hospital").val() == ""){
                alert("請瑱入篩檢醫院名稱");
                return false;
            }
        }
    }
    if(answer5 == undefined){
        alert("請填選第五題");
        return false;
    } else if(answer5 == 'y'){
        if($("#relationship").val() == ""){
            alert("請在第五題中填入家屬關係或本人");
            return false;
        }else if($("#contactDate").val() == ""){
            alert("請在第五題中填入與病患接觸日期");
            return false;
        }
    }
    if(answer6 == undefined){
        alert("請填選第六題");
        return false;
    } else if(answer6 == 'y'){
        var managementType = $("input[name='managementType']:checked").val();
        if(managementType == undefined){
            alert("請在第六題中選擇管理方式");
            return false;
        }else if($("#managementDateStart").val() == ""){
            alert("請在第六題中填入管理起始日期");
            return false;
        }else if($("#managementDateEnd").val() == ""){
            alert("請在第六題中填入管理結束日期");
            return false;
        }else if($("#managementDateStart").val()>$("#managementDateEnd").val()){
            alert("在第六題中，管理結束日期不可早於管理起始日期");
            return false;
        }
    }
}

function checkAndSave(){
    if(ckeckPersonalData() && checkQueryDate){
        var name = $("#name").val();
        var birthday = $("#birthday").val();
        var sex = $("input[name='sex']:checked").val();
        var invitedUnit = $("#invitedUnit").val();
        var offCampusUnit = $("#offCampusUnit").val();
        var event = $("#event").val();
        var evenDateStart = $("#evenDateStart").val();
        var evenDateEnd = $("#evenDateEnd").val();
        var phone = $("#phone").val();
        var email = $("#email").val();

        var answer1 = $("input[name='answer1']:checked").val();
        var enteredFrom = $("#enteredFrom").val();
        var enteredDate = $("#enteredDate").val();
        var transitFrom = $("#transitFrom").val();
        var transitDate = $("#transitDate").val();

        var answer3=[];
        $("input[name='answer3']:checked").each(function(){
            if($(this).val()!="checkbox9"){
                answer3.push($(this).val());
            }
        });
        var answer3Other = $("#answer3Other").val();
        var answer4 = $("input[name='answer4']:checked").val();
        var screen = [];
        $("input[name='screen']:checked").each(function(){
            screen.push($(this).val());
        });
        var fluScreenDate = $("#fluScreenDate").val();
        var fluScreenResult =  $("input[name='fluScreenResult']:checked").val();
        if(fluScreenResult == undefined || fluScreenResult == "other"){
            fluScreenResult = $("#fluScreenResultOther").val();
        }
        var covid19ScreenDate = $("#covid19ScreenDate").val();
        var covid19ScreenResult =  $("input[name='covid19ScreenResult']:checked").val();
        if(covid19ScreenResult == undefined || covid19ScreenResult == "other"){
            covid19ScreenResult = $("#covid19ScreenResultOther").val();
        }
        var hospital = $("#hospital").val();
        var answer5 = $("input[name='answer5']:checked").val();
        var relationship = $("#relationship").val();
        var contactDate = $("#contactDate").val();
        var answer6 = $("input[name='answer6']:checked").val();
        var managementType = $("input[name='managementType']:checked").val();
        if(managementType == undefined){
            managementType = "";
        }
        var managementDateStart = $("#managementDateStart").val();
        var managementDateEnd = $("#managementDateEnd").val();
        $.ajax({
            type: "Post",
            url: "https://script.google.com/macros/s/AKfycbyBpoXqaRHkzI-h-JpPvYliPp5K0LvXCyOCpVEyPRmhQd2sE04/exec",
            data: {
              "name": name,
              "birthday": birthday,
/*            "sex": sex,
              "invitedUnit": invitedUnit,
              "offCampusUnit": offCampusUnit,
              "event": event,
              "evenDateStart": evenDateStart,
              "evenDateEnd": evenDateEnd,
              "phone": phone,
              "email": email,
              "answer1": answer1,
              "enteredFrom": enteredFrom,
              "enteredDate": enteredDate,
              "transitFrom": transitFrom,
              "transitDate": transitDate,
              "answer3": answer3,
              "answer3Other": answer3Other,
              "answer4": answer4,
              "screen": screen,
              "fluScreenDate": fluScreenDate,
              "fluScreenResult": fluScreenResult,
              "covid19ScreenDate": covid19ScreenDate,
              "covid19ScreenResult": covid19ScreenResult,
              "hospital": hospital,
              "answer5": answer5,
              "relationship": relationship,
              "contactDate": contactDate,
              "answer6": answer6,
              "managementType": managementType,
              "managementDateStart": managementDateStart,
              "managementDateEnd": managementDateEnd,
*/
            },
            success: function(response) {
                alert(response);
            },
          });


    }
}


