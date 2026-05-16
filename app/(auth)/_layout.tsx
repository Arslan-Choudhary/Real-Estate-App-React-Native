import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";
import { useMemo } from "react";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  const screenOptions = useMemo(() => ({ headerShown: false }), []);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return <Stack screenOptions={screenOptions} />;
}
