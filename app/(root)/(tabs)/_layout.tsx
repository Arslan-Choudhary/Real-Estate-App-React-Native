import { Tabs } from "expo-router";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo } from "react";
import { useUserStore } from "@/store/userStore";
import { Platform } from "react-native";

function AndroidTabs() {
  const isAdmin = useUserStore((state) => state.isAdmin);

  const screenOptions = useMemo(() => ({ headerShown: false }), []);

  const homeOptions = useMemo(
    () => ({
      title: "Home",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="home" size={size} color={color} />
      ),
    }),
    [],
  );

  const searchOptions = useMemo(
    () => ({
      title: "Search",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="search" size={size} color={color} />
      ),
    }),
    [],
  );

  const createOptions = useMemo(
    () => ({
      title: "Add Property",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="add-circle" size={size} color={color} />
      ),
    }),
    [],
  );

  const savedOptions = useMemo(
    () => ({
      title: "Saved",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="heart" size={size} color={color} />
      ),
    }),
    [],
  );

  const profileOptions = useMemo(
    () => ({
      title: "Profile",
      tabBarIcon: ({ color, size }: { color: string; size: number }) => (
        <Ionicons name="person" size={size} color={color} />
      ),
    }),
    [],
  );

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen name="index" options={homeOptions} />
      <Tabs.Screen name="search" options={searchOptions} />

      {isAdmin && <Tabs.Screen name="create" options={createOptions} />}

      <Tabs.Screen name="saved" options={savedOptions} />
      <Tabs.Screen name="profile" options={profileOptions} />
    </Tabs>
  );
}

function IOSTabs() {
  const isAdmin = useUserStore((state) => state.isAdmin);

  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Icon sf="house.fill" />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <Icon sf="magnifyingglass" />
        <Label>Search</Label>
      </NativeTabs.Trigger>

      {isAdmin && (
        <NativeTabs.Trigger name="create">
          <Icon sf="plus.circle.fill" />
          <Label>Add Property</Label>
        </NativeTabs.Trigger>
      )}

      <NativeTabs.Trigger name="saved">
        <Icon sf="heart.fill" />
        <Label>Saved</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon sf="person.fill" />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

export default function TabsLayout() {
  return Platform.OS === "ios" ? <IOSTabs /> : <AndroidTabs />;
}
