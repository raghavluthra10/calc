export const changeTheme = () => {
   const root = document.querySelector(":root");
   const rootStyle = getComputedStyle(root);
   const lightThemeColor = rootStyle
      .getPropertyValue("--light-bg")
      .substring(1);
   let containerDiv = document.querySelector(".container");
   let containerDivBgColor = getComputedStyle(containerDiv).backgroundColor;

   let todosContainer = document.querySelector(".todosContainer");
   let todoItem = document.querySelectorAll(".todoItem");

   function changeThemeToLight() {
      containerDiv.style.backgroundColor = "var(--light-bg)";
      todosContainer.style.backgroundColor = "var(--light-primary-color)";

      for (let i = 0; i < todoItem.length; i++) {
         todoItem[i].style.backgroundColor = "var(--light-secondary-color)";
      }
   }

   function changeThemeToDark() {
      containerDiv.style.backgroundColor = "var(--dark-bg)";
      todosContainer.style.backgroundColor = "var(--dark-primary-color)";

      for (let i = 0; i < todoItem.length; i++) {
         todoItem[i].style.backgroundColor = "var(--dark-secondary-color)";
      }
   }
   if (lightThemeColor === containerDivBgColor) {
      console.log(lightThemeColor, containerDivBgColor);
      changeThemeToDark();
   } else {
      // change theme to light
      console.log(lightThemeColor, containerDivBgColor, "hfuydr");
      changeThemeToLight();
   }
};
