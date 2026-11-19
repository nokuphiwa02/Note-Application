import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  id: string;
  fullName: string;
  surname: string;
  email: string;
  password: string;
};

const USERS_KEY = "notebook_users";

// Get all registered users
export const getUsers = async (): Promise<User[]> => {
  try {
    const storedUsers = await AsyncStorage.getItem(USERS_KEY);

    return storedUsers ? JSON.parse(storedUsers) : [];
  } catch (error) {
    console.log("Error getting users:", error);
    return [];
  }
};

// Register a new user
export const registerUser = async (
  user: Omit<User, "id">
): Promise<void> => {
  const users = await getUsers();

  // Check if email already exists
  const existingUser = users.find(
    (item) => item.email.toLowerCase() === user.email.toLowerCase()
  );

  if (existingUser) {
    throw new Error("An account with this email already exists.");
  }

  const newUser: User = {
    id: Date.now().toString(),
    ...user,
  };

  users.push(newUser);

  await AsyncStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );
};

// Login user
export const loginUser = async (
  email: string,
  password: string
): Promise<User> => {
  const users = await getUsers();

  const existingUser = users.find(
    (user) =>
      user.email.toLowerCase() === email.trim().toLowerCase() &&
      user.password === password
  );

  if (!existingUser) {
    throw new Error("Incorrect email or password.");
  }

  return existingUser;
};