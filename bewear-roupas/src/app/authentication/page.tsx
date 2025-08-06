import React from "react";

import { Header } from "@/components/common/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SingInForm from "./components/sign-in-form";
import SingUpForm from "./components/sign-up-form";

const Authentication = () => {
  return (
    <>
      <Header />
      <div className="flex w-full flex-col gap-6 p-5">
        <Tabs defaultValue="sign-in">
          <TabsList className="w-full">
            <TabsTrigger value="sign-in">Entrar</TabsTrigger>
            <TabsTrigger value="sign-up">Criar Conta</TabsTrigger>
          </TabsList>

          <TabsContent value="sign-in">
            <SingInForm />
          </TabsContent>

          <TabsContent value="sign-up">
            <SingUpForm />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Authentication;
