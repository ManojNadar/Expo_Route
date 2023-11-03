import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View>
      {/* <Button onPress={() => router.push("/register")} title="Register" /> */}
      {/* <Link href="/register">Register</Link> */}

      {/* <Link href={"/register"} asChild>
        <Button title="Register button" />
      </Link> */}

      <Link href={"/one"} asChild>
        <Button title="One" />
      </Link>
      <Link href={"/(tabs)/two"} asChild>
        <Button title="two" />
      </Link>
    </View>
  );
}

// if replace no back option
