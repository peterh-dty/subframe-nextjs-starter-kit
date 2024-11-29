"use client";

import React from "react";
import { Alert } from "@/subframe/components/Alert";
import { Button } from "@/subframe/components/Button";
import { ButtonDeity } from "../subframe";

function InstallationSuccessPage() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-8 bg-default-background py-12">
      <img
        className="h-6 flex-none object-cover"
        src="https://res.cloudinary.com/subframe/image/upload/v1711417518/shared/fdb8rlpzh1gds6vzsnt0.svg"
      />
      <div className="flex w-full max-w-[576px] flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-4 rounded-md bg-brand-100 px-12 py-12">
          <span className="font-['Inter'] text-[40px] font-[600] leading-[40px] text-default-font">
            🥳
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Nice work, you&#39;re all set up!
            </span>
            <span className="text-body font-body text-subtext-color">
              Get started building your own UI below
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <Alert
            className="h-auto grow shrink-0 basis-0 self-stretch"
            icon="FeatherTerminalSquare"
            title="Components are synced"
            description="Run the CLI anytime you add or edit components"
          />
          <Alert
            className="h-auto grow shrink-0 basis-0 self-stretch"
            icon="FeatherClipboardCheck"
            title="Pages are copy & pasted"
            description="Export your code to a .tsx file and start developing"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center gap-6 bg-default-background px-6 py-6">
            <div className="flex w-full flex-col items-center">
              <div className="flex w-full items-start gap-4">
                <div className="flex flex-col items-center self-stretch pt-1.5">
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <div className="flex w-0.5 grow shrink-0 basis-0 flex-col items-start gap-2 bg-brand-600" />
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-1 pb-9">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Build your first page
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Choose from our designer-curated templates, or start from
                      scratch.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex h-1.5 w-0.5 flex-none flex-col items-start gap-2 bg-brand-600" />
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <div className="flex w-0.5 grow shrink-0 basis-0 flex-col items-start gap-2 bg-brand-600" />
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2 pb-9">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Export page code
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Copy &amp; paste generated code to your project, just like
                      you did here.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex flex-col items-center self-stretch">
                  <div className="flex h-1.5 w-0.5 flex-none flex-col items-start gap-2 bg-brand-600" />
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                </div>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Write your business logic
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      The code is all yours! Refactor or add custom code to your
                      pixel-perfect UI.
                    </span>
                  </div>
                  <ButtonDeity variant="neutral-primary"
                  size="large"
                    icon="FeatherCode"
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Try adding an onClick handler to me!
                  </ButtonDeity>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallationSuccessPage;