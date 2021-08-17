// let input = prompt("input your details here:")
// console.log(input)

  
    $(function() {
  
        let pet_info = {
          "name" : "Jasper",
          "weight" : 6,
          "happiness": 0
        }
        
        checkAndUpdatePetInfoInHtml();
        
        $('.treat').click(clickedTreatButton);
        $('.play').click(clickedPlayButton);
        $('.exercise').click(clickedExerciseButton);
        
        function clickedTreatButton() {
          pet_info['happiness'] = pet_info['happiness'] + 1;
          pet_info['weight'] = pet_info['weight'] + 2;
          checkAndUpdatePetInfoInHtml();
        }
        
        function clickedPlayButton() {
          pet_info['happiness'] = pet_info['happiness'] + 2;
          pet_info['weight'] = pet_info['weight'] - 1;
          checkAndUpdatePetInfoInHtml();
        }
        
        function clickedExerciseButton() {
          pet_info['happiness'] = pet_info['happiness'] - 1;
          pet_info['weight'] = pet_info['weight'] - 1;
          checkAndUpdatePetInfoInHtml();
        }
      
        function checkAndUpdatePetInfoInHtml() {
          checkWeightAndHappinessBeforeUpdating();  
          updatePetInfoInHtml();
        }
        
        function checkWeightAndHappinessBeforeUpdating() {
          if (pet_info['weight'] < 1) {
            pet_info['weight'] = 1;
          }
        }
        
        function updatePetInfoInHtml() {
          $('.name').text(pet_info['name']);
          $('.weight').text(pet_info['weight']);
          $('.happiness').text(pet_info['happiness']);
        }
        
      })