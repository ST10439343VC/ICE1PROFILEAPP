# ICE 2 – Talk Me Through My UI

**Student Name:** Buyani Ngcemu  
**Course:** Mobile App and Scripting  
**Project Name:** Student Profile App  
**Technology:** React Native and Expo

## 1. Original Design Explanation

My Student Profile App was designed to display my personal and course information in a simple, organised interface. I used a main `View` as the screen container and another `View` to hold the profile card. I used `Text` components to display my name, course, heading, introduction and footer. The `Image` component displays my profile picture from the assets folder.

I used `TextInput` to allow users to type a message and `Pressable` to create an interactive button. The button displays a greeting and the message entered by the user. I used `StyleSheet` to manage colours, spacing, alignment, font sizes, rounded corners and the appearance of the profile card.

I chose a blue and white colour scheme because it gives the interface a clean and professional appearance. I used padding to create space inside the card and margins to separate individual elements. I used `alignItems` to position elements horizontally and `justifyContent` to position the card vertically on the screen.

The part I am least confident about is understanding how React Native state works and how `useState` updates the text displayed when a user interacts with the application.

## 2. AI Rubber Duck Conversation

**Note:** The following is a draft conversation to help me explain my design. I must compare it with my actual AI Rubber Duck conversation and update it to reflect the questions asked and answers I gave.

### Question 1: Why did you use View in your application?

**My answer:** I used `View` to group related components together. The main View contains the screen, while the inner View groups the profile information into a card. This makes the layout easier to organise and style.

### Question 2: What is the difference between padding and margin?

**My answer:** Padding creates space inside an element, between its content and its boundary. Margin creates space outside an element, separating it from other elements. In my app, padding creates space inside the profile card, while margins separate the picture, heading and other content.

### Question 3: How does TextInput work in your application?

**My answer:** `TextInput` allows the user to enter a message. I used `useState` to store the message and `onChangeText` to update the state whenever the user types. The button then uses the stored message when displaying the greeting.

### Question 4: Why did you choose Pressable instead of displaying ordinary text as a button?

**My answer:** I used `Pressable` because it responds to user interaction. Its `onPress` function runs when the user presses it. In my application, this function closes the keyboard and displays an alert containing a greeting and the message entered by the user.

### Question 5: What is the purpose of StyleSheet?

**My answer:** `StyleSheet` keeps the styling separate from the main interface structure. It allows me to define colours, dimensions, spacing, alignment, fonts and other visual properties in one organised place. This makes the application easier to maintain and update.

### Question 6: What is the difference between alignItems and justifyContent?

**My answer:** `alignItems` controls the alignment of children along the cross-axis, while `justifyContent` controls their distribution along the main axis. In my main container, `alignItems: 'center'` centres the card horizontally and `justifyContent: 'center'` centres it vertically because the container uses a column layout.

### Question 7: Why did you use useState?

**My answer:** I used `useState` to remember the message entered by the user. When the message changes, React updates the state. This allows the button to access the latest message instead of using a fixed value.

### Question 8: How could you make your interface easier to use?

**My answer:** I could improve the interface by making the button respond visually when pressed, providing a clear placeholder in the input field, and using consistent spacing and readable text. These changes help users understand how to interact with the application.

## 3. Interface Improvements

### Change 1: Improved the profile card layout

**What I changed:** I placed the profile information inside a white card with rounded corners, consistent padding and a subtle shadow.

**Why I changed it:** This separates the profile information from the background and creates a clearer visual structure.

### Change 2: Improved button interaction

**What I changed:** I used `Pressable` styling to change the button's appearance while it is being pressed.

**Why I changed it:** The visual feedback helps users recognise that the button is interactive.

### Change 3: Improved message input and greeting

**What I changed:** I connected the text input to state and made the button display the entered message in an alert. I also dismiss the keyboard when the button is pressed.

**Why I changed it:** This makes the application more interactive and allows the user to see how their input affects the result.

## 4. Reflection

Building this Student Profile App helped me understand how React Native components work together to create a user interface. I learned how View organises content, how Text and Image display information, and how TextInput and Pressable allow user interaction. The questions about padding versus margin and alignItems versus justifyContent made me think more carefully about layout. I still need more practice understanding useState and how state changes update the interface.

## 5. Project Summary

This project demonstrates a basic React Native profile interface with a profile image, student information, a text input and an interactive button. It uses StyleSheet for layout and visual design and React state to handle user input.

**Repository:** https://github.com/ST10439343VC/ICE1PROFILEAPP
