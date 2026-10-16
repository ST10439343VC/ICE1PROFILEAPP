
import React, { useState } from 'react';

// Import the React Native components used in this app.
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';

// Select the greeting message separately from the button interaction.
const getGreetingMessage = (text: string): string => {
  return text.trim()
    ? `Your message: ${text}`
    : 'Welcome to my profile!';
};

export default function App() {
  // Store the message entered by the user.
  const [message, setMessage] = useState('');

  // Run this function when the button is pressed.
  const sayHello = () => {
    // Close the keyboard after pressing the button.
    Keyboard.dismiss();

    // Display the greeting and the selected message.
    Alert.alert(
      'Hello, Buyani!',
      getGreetingMessage(message)
    );
  };

  return (
    // Main screen container.
    <View style={styles.container}>
      {/* White card containing the profile information. */}
      <View style={styles.card}>

        {/* Display the sunset profile picture stored in assets. */}
        <Image
          source={require('./assets/ICE1PROFILEPIC.png')}
          style={styles.profileImage}
          resizeMode="cover"
          accessibilityLabel="Sunset profile picture"
        />

        {/* Profile heading. */}
        <Text style={styles.heading}>MY PROFILE</Text>

        {/* Student name. */}
        <Text style={styles.name}>Buyani Ngcemu</Text>

        {/* Student course. */}
        <Text style={styles.course}>
          Mobile App and Scripting
        </Text>

        {/* Short introduction. */}
        <Text style={styles.description}>
          Welcome to my profile! This is my first React Native app.
        </Text>

        {/* Label for the text input. */}
        <Text style={styles.label}>Leave me a message</Text>

        {/* Allow the user to type a message. */}
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          placeholderTextColor="#64748b"
          value={message}
          onChangeText={setMessage}
          accessibilityLabel="Message input"
          returnKeyType="done"
        />

        {/* Button that displays a greeting. */}
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={sayHello}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Say Hello</Text>
        </Pressable>

        {/* Footer displayed at the bottom of the card. */}
        <Text style={styles.footer}>
          My First React Native App
        </Text>
      </View>
    </View>
  );
}

// StyleSheet controls the layout, colours, spacing and appearance.
const styles = StyleSheet.create({

  // Centre the profile card on the screen.
  container: {
    flex: 1,
    backgroundColor: '#eaf0f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  // Style the white profile card.
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 26,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 5,
  },

  // Display the profile picture as a circle.
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#dbeafe',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#f59e0b',
  },

  // Style the main heading.
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#64748b',
    marginBottom: 12,
  },

  // Style the student's name.
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
    marginBottom: 8,
  },

  // Style the course name.
  course: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 16,
  },

  // Style the introduction text.
  description: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 26,
  },

  // Position and style the input label.
  label: {
    alignSelf: 'flex-start',
    color: '#334155',
    fontWeight: '600',
    marginBottom: 8,
  },

  // Style the message input field.
  input: {
    width: '100%',
    minHeight: 52,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#0f172a',
    marginBottom: 16,
  },

  // Style the button.
  button: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  // Change the button appearance while it is pressed.
  buttonPressed: {
    backgroundColor: '#1d4ed8',
    opacity: 0.85,
  },

  // Style the button text.
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Style the footer.
  footer: {
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 22,
  },
});
