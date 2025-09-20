import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function SampleComment() {
  const [comment, setComment] = useState(""); // current input
  const [comments, setComments] = useState([]); // list of comments

  const addComment = () => {
    if (comment.trim() === "") return; // prevent empty comments
    setComments([...comments, comment]); // add new comment to array
    setComment(""); // clear input
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>                                                                   </Text>

      {/* Comment input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a comment..."
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.button} onPress={addComment}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Comment list */}
      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentBox}>
            <Text style={styles.commentText}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "yellowgreen",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white",
  },
  button: {
    marginLeft: 10,
    backgroundColor: "green",
    paddingHorizontal: 15,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  commentBox: {
    backgroundColor: "yellowgreen",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "yellow",
  },
  commentText: {
    fontSize: 16,
    color: 'white',
  },
});