var botui = new BotUI('hello-world');

botui.message.add({
  loading: true,
  delay: 1000,
  content: 'Hello! I\'m Cyber-Bot. Please enter your name.'
}).then(function () { // wait till previous message has been shown.

  botui.action.text({
    addMessage: false,
    action: {
      placeholder: 'Enter your name'
    }
  }).then(function (name) {
    botui.message.add({
      human: true, // show it as right aligned to UI
      content: 'I\'m ' + name.value
    }).then(function() {
    botui.message.add({
      loading: true,
      delay: 500,
      content: 'Nice to meet you ' + name.value + '. How may I help you?'
    });
  }).then(function(){
    botui.action.button({
      delay: 1000,
      action: [
        { // show only one button
          text: 'I have been a victim of Cyber Crime',
          value: 'complaint'
        },
        {
          text: 'I need information regarding Cyber Crimes',
          value: 'information'
        }
      ]
    }).then(function(options)  {
      var crime_btn1, crime_btn2, crime_btn3, crime_btn4;
      if(options.value === "complaint"){
        crime_btn1 = 'cmplt_lottery';
        crime_btn2 = 'cmplt_online';
        crime_btn3 = 'cmplt_matrimony';
        crime_btn4 = 'cmplt_loan';
      }
      else if(options.value === "information"){
        crime_btn1 = 'info_lottery';
        crime_btn2 = 'info_online';
        crime_btn3 = 'info_matrimony';
        crime_btn4 = 'info_loan';
      }
    botui.action.button({
      delay: 1000,
      action: [
        { // show only one button
          text: 'Lottery Scam',
          value: crime_btn1
        },
        { // show only one button
          text: 'Online Fraud',
          value: crime_btn2
        },
        { // show only one button
          text: 'Matrimonial Fraud',
          value: crime_btn3
        },
        { // show only one button
          text: 'Loan Fraud',
          value: crime_btn4
        }
      ]
    }).then(function(res) {
      var message, texts_a, values_a;
      if (res.value === 'cmplt_lottery') {
        message = 'Please select the below sub category for a <b>Lottery Scam</b>.';
        texts_a = 'subcategory for lottery';
        values_a = 'sub_cat1';
      }
      else if (res.value === 'cmplt_online') {
        message = 'Please select the below sub category for a <b>Online Fraud</b>.';
        texts_a = 'subcategory for online';
        values_a = 'sub_cat2';
      }
      else if (res.value === 'cmplt_matrimony') {
        message = 'Please select the below sub category for a <b>Matrimonial Fraud</b>.';
      }
      else if (res.value === 'cmplt_loan') {
        message = 'Please select the below sub category for a <b>Loan Fraud</b>.';
      }
      else if (res.value === 'info_lottery') {
        message = '***INFO ABOUT LOTTERY FRAUD***';
      }
      else if (res.value === 'info_online') {
        message = '***INFO ABOUT ONLINE FRAUD***';
      }
      else if (res.value === 'info_matrimony') {
        message = '***INFO ABOUT MATRIMONIAL FRAUD***';
      }
      else if (res.value === 'info_loan') {
        message = '***INFO ABOUT LOAN FRAUD***';
      }
      botui.message.add({
        type: 'html',
        delay: 500,
        loading: true,
        content: message
      });
      botui.action.button({ // let user do something
        delay: 1000,
        action: [
          {
            text: texts_a,
            value: values_a
          }
        ]
      });
        // console.log(res.value);
    });
  });
    // comment till here
  });
});
});
