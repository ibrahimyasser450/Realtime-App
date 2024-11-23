"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useSelf } from "@liveblocks/react/suspense";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import UserTypeSelector from "./UserTypeSelector";
import Collaborator from "./Collaborator";
import { updateDocumentAccess } from "@/lib/actions/room.actions";
import { getAllClerkUsers } from "@/lib/actions/user.actions";

const ShareModal = ({
  roomId,
  collaborators,
  creatorId,
  currentUserType,
}: ShareDocumentDialogProps) => {
  const user = useSelf();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<JSX.Element | string>("");

  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType>("viewer");
  const [users, setUsers] = useState<{ email: string }[]>([]); // Add state for users
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getAllClerkUsers();
      setUsers(fetchedUsers);
    };
    fetchUsers();
  }, []);

  const shareDocumentHandler = async () => {
    setLoading(true);
    const isExistingUser = users.some((user) => user.email === email);

    if (!isExistingUser) {
      setContent(<p>user does not exist</p>);
      setLoading(false);
      return;
    }

    await updateDocumentAccess({
      roomId,
      email,
      userType: userType as UserType,
      updatedBy: user.info,
    });

    setLoading(false);
  };

  return (
    <div className="flex items-center">
      {currentUserType === "editor" ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <div className="flex items-center cursor-pointer gradient-blue h-9 gap-1 px-3 rounded-lg">
              <Image
                src="/assets/icons/share.svg"
                alt="share"
                width={20}
                height={20}
                className="min-w-4 md:size-5"
              />
              <p className="mr-1 hidden sm:block">Share</p>
            </div>
          </DialogTrigger>
          <DialogContent className="shad-dialog">
            <DialogHeader>
              <DialogTitle>Manage who can view this project</DialogTitle>
              <DialogDescription>
                Select which users can view and edit this document
              </DialogDescription>
            </DialogHeader>

            <Label htmlFor="email" className="mt-6 text-blue-100">
              Email address
            </Label>
            <div className="flex items-center gap-3">
              <div className="flex flex-1 rounded-md bg-dark-400">
                <Input
                  id="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="share-input"
                />
                <UserTypeSelector
                  userType={userType}
                  setUserType={setUserType}
                />
              </div>
              <Button
                type="submit"
                onClick={shareDocumentHandler}
                className="gradient-blue flex h-full gap-1 px-5"
                disabled={loading}
              >
                {loading ? "Sending..." : "Invite"}
              </Button>
            </div>
            <div className="mt-[-11px] text-sm text-red-500">{content}</div>
            <div className="my-2 space-y-2">
              <ul className="flex flex-col">
                {collaborators.map((collaborator) => (
                  <Collaborator
                    key={collaborator.id}
                    roomId={roomId}
                    creatorId={creatorId}
                    email={collaborator.email}
                    collaborator={collaborator}
                    user={user.info}
                  />
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <p className="view-only-tag text-center">View only</p>
      )}
    </div>
  );
};

export default ShareModal;
