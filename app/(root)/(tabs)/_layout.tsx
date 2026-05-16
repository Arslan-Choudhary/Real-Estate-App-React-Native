import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo } from "react";

export default function TabLayout() {
  const screenOptions = useMemo(() => ({ headerShown: false }), []);

  const homeOptions = useMemo(
    () => ({
      title: "Home",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    }),
    []
  );

  const searchOptions = useMemo(
    () => ({
      title: "Search",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="search" size={size} color={color} />
      ),
    }),
    []
  );

  const savedOptions = useMemo(
    () => ({
      title: "Saved",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="heart" size={size} color={color} />
      ),
    }),
    []
  );

  const profileOptions = useMemo(
    () => ({
      title: "Profile",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="person" size={size} color={color} />
      ),
    }),
    []
  );

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="index" options={homeOptions} />
      <Tabs.Screen name="search" options={searchOptions} />
      <Tabs.Screen name="saved" options={savedOptions} />
      <Tabs.Screen name="profile" options={profileOptions} />
    </Tabs>
  );
}
