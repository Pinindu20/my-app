import { Link, Slot } from "expo-router";
import { View, Text } from "react-native";
import "../global.css";

// export default Slot;

const RootLayout = () => {
  return (
    <View className="relative w-full flex-1">
        <Slot />
        <View className="w-full px-5 absolute h-12 bottom-0
        left-0 z-50 bg-red-500 flex-row items-center justify-between">
          <View>
            <Link href={"/"}>Home</Link>
          </View>
          <View>
            <Link href={"/product"}>product</Link>
          </View>
          <View>
            <Link href={"/category"}>category</Link>
          </View>
          <View>
            <Link href={"/profile"}>profile</Link>
          </View>
        </View>
    </View>
  )
}

export default RootLayout