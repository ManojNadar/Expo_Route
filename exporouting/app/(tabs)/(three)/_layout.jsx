import React from "react";
import { Drawer } from "expo-router/drawer";

const Layout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="page1"
        options={{
          headerTitle: "New Feed",
          drawerLabel: "NewsFeed",
        }}
      />
    </Drawer>
  );
};

export default Layout;
