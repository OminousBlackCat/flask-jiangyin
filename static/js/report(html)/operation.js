
document.getElementById('details_div').style.display="none";
function detail(number){
	var obj = eval(Infor)
	console.log('num:', number)
	account = eval(User).account
	Num = 'num_' + number
	Name = 'name_' + number
	Time = 'time_' + number
	State = 'state_' + number
	Topic = 'topic_' + number
	State =  document.getElementById(State).innerHTML
	content = obj[number].content
	remark = obj[number].remark
	if(State == '未审核'){
		$("#detail_state").removeClass("bg-success")
		$("#detail_state").removeClass("bg-danger")
		$("#detail_state").addClass("bg-warning")
		document.getElementById('reject_div').style.display="none"
		console.log(obj[number].sender_account)

		if(obj[number].sender_account != account){
			document.getElementById('Reject').style.display=""
			document.getElementById('Access').style.display=""
			document.getElementById('detail_proposer').innerHTML = document.getElementById(Name).innerHTML
		}
		else{
			document.getElementById('Reject').style.display="none"
			document.getElementById('Access').style.display="none"
			document.getElementById('detail_proposer').innerHTML = document.getElementById(Name).innerHTML + "(自己)";
			document.getElementById('detail_proposer').style = "color:#1e88e5"
		}
	}
	else if(State == '已通过'){
		$("#detail_state").removeClass("bg-warning")
		$("#detail_state").removeClass("bg-danger")
		$("#detail_state").addClass("bg-success")
		document.getElementById('reject_div').style.display="none"
		document.getElementById('Reject').style.display="none"
		document.getElementById('Access').style.display="none"
	}
	else{
		$("#detail_state").removeClass("bg-warning")
		$("#detail_state").removeClass("bg-success")
		$("#detail_state").addClass("bg-danger")
		document.getElementById('reject_div').style.display=""
		document.getElementById('Reject').style.display="none"
		document.getElementById('Access').style.display="none"
	}
	//color += " !important"
	//console.log(color)
	document.getElementById('detail_number').innerHTML = document.getElementById(Num).innerHTML;
	document.getElementById('report_id').value = document.getElementById(Num).innerHTML;
				
	document.getElementById('detail_proposer').innerHTML = document.getElementById(Name).innerHTML;
	document.getElementById('report_name').value = document.getElementById(Name).innerHTML;
	document.getElementById('receiver_name').value = obj[number].receiver_name + "("+obj[number].receiver_account+")";
	document.getElementById('detail_topic').value = document.getElementById(Topic).innerHTML;
	document.getElementById('detail_time').innerHTML = document.getElementById(Time).innerHTML;
	document.getElementById('datatext').innerHTML = content
	document.getElementById('reject_reasons').innerHTML = remark
	document.getElementById('detail_state').innerHTML = State;

	//document.getElementById('detail_state').style.backgroundColor=color;
	document.getElementById('details_div').style.display="";
}
function del(number){
	Num = 'num_' + number
	Name = 'name_' + number
	num_infor = document.getElementById(Num).innerHTML
	name_infor = document.getElementById(Name).innerHTML
	document.getElementById('del_infor').innerHTML = "删除："+num_infor + "," +name_infor + "?"
}
function hidder(){
	document.getElementById('details_div').style.display="none";
}
