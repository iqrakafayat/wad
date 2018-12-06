var  AccountDetails=[{
    AccountTitle: 'iqraKafayat',
    AvailableBalance: 1,
    AccountCurrency: '$',
    IBAN: 1
},
    {
        AccountTitle: 'abc',
        AvailableBalance: 2,
        AccountCurrency: '$',
        IBAN: 2
    },
    {
        AccountTitle: 'yju',
        AvailableBalance: 3,
        AccountCurrency: '$',
        IBAN: 3
    }]

var currentUser=0;
var title=document.getElementById('title');
var balance= document.getElementById( 'balance');
var currency=document.getElementById('currency');
var IBAN=document.getElementById('IBAN');

title.innerHTML=AccountDetails[currentUser].AccountTitle;
balance.innerHTML= AccountDetails[currentUser].AvailableBalance;
currency.innerHTML=AccountDetails[currentUser].AccountCurrency;
IBAN.innerHTML=AccountDetails[currentUser].IBAN;


function deposit(){
    var acc_deposit= document.getElementById("deposit");
    if(event.key === "Enter")
    {
        var data=parseInt(acc_deposit.value,10);
        result=Number.isInteger(data);
        if(result && data>0)
        {
            balance.value=balance.value+parseInt(acc_deposit.value,10);
            balance.innerText=balance.value;
            acc_deposit.value= "";
            var table_transaction= document.getElementById("transaction-table");
            table_transaction.innerHTML+='<tr>\n'+
                ' <td align="left" valign="middle" scope="col">' +Data()+'<td>\n' +
            ' <td align="left" valign="middle" scope="col">' +"Credit"+'<td>\n' +
            ' <td align="left" valign="middle" scope="col">' +data+'<td>\n' +
             '   </tr>';

        }
        else
        {
            var error_msg= document.getElementById("deposit_msg");
            error_msg.innerText="enter valid amount"
        }
    }
}
function withdraw(){
    var acc_withdraw=document.getElementById("withdraw");
    if(event.key === "Enter")
    {

        var data=parseInt(acc_withdraw.value,10);
        result=Number.isInteger(data);

            balance.value=balance.value-parseInt(acc_withdraw.value,10);
            balance.innerText=balance.value;
            acc_withdraw.value= "";
            var table_transaction= document.getElementById("transaction-table");
            table_transaction.innerHTML+='<tr>\n'+
                ' <td align="left" valign="middle" scope="col">' +Data()+'<td>\n' +
                ' <td align="left" valign="middle" scope="col">' +"Debit"+'<td>\n' +
                ' <td align="left" valign="middle" scope="col">' +data+'<td>\n' +
                '   </tr>';

        }



}
}