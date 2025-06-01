
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex flex-1 justify-center items-center text-accent">
      <Text className="bg-red-400">Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/about"}>About</Link>

      <Link href={"/movie/avenger"}>Movie Details</Link>
    </View>
  );
}
