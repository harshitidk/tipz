var checkbox = document.getElementsByName('tip-div-btn');
var warning = document.getElementById('tip-warning');
// console.log(checkbox.length);

var i,count=0; 
var pep_tip=0;

var cos = document.getElementById('bill-input').innerHTML;
// console.log(cos);

var tip = [5,10,15,25,50];

// document.getElementById('tip-price').textContent = 0;
// document.getElementById('total-price').textContent = 0;

function check_box()
{
    count=0;
    for(i=0;i<checkbox.length;i++)
    {
        // console.log(checkbox[i].checked);
        if(checkbox[i].checked==true)
        {
            count = count + 1;
        }
    }
    if(count>1)
    {
        console.log("more than one selected");
        // document.getElementsById('tip-warning').textContent = "Please Only One at a time";
        warning.textContent = "* Select only one";
        return false;
    }
    else
    {
        warning.textContent = "";
        return true;
    }
    // return true;
}

var bill_price = document.getElementById('bill-input').value;
var people = document.getElementById('pep-input').value;
var tip_value=0;

var tip_per = 0;
var tot_per = 0;

// console.log(people);

// console.log(bill_price);

calculate();

function get_tip()
{
    for(i=0;i<5;i++)
    {
        if(checkbox[i].checked==true)
        {
            // console.log(tip[i]);
            tip_value = tip[i];
        }
    }
    if(tip_value == 0)
    {
        tip_value = document.getElementById('custom_tip').value;
    }

    return tip_value;
}

function calculate()
{
    // bill_price = Number(bill_price);
    // people = Number(people);

    // console.log(tip_value);
    pep_tip = get_tip();
    // console.log(pep_tip);
    // console.log(bill_price);
    bill_price = document.getElementById('bill-input').value;
    people = document.getElementById('pep-input').value;

    tip_per = ((pep_tip * bill_price)/100.0)/people;
    tot_per = bill_price/people + tip_per;
    
    document.getElementById('tip-price').textContent = tip_per;
    document.getElementById('total-price').textContent = tot_per;
    tip_value =0;
}

function reset()
{
    document.getElementById('bill-input').value = null;
    document.getElementById('pep-input').value = null;
    document.getElementById('custom_tip').value = null;
    document.getElementById('tip-price').textContent = 0;
    document.getElementById('total-price').textContent = 0;
    for(i=0;i<checkbox.length;i++)
    {
        checkbox[i].checked = false;
    }
}