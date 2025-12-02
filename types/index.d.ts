declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  $createdAt: string;
  $updatedAt: string;
};
declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface TotalBalanceProps {
  totalBanks: number;
  totalCurrentBalance: number;
  accounts: Account[];
}

declare interface DoughnutChartProps {
  accounts: Account[];
}

declare interface SiderbarProps {
  user: User | null;
}

declare interface MobileNavProps {
  user: User | null;
}

declare interface RightSidebarProps {
  user: Models.User | null;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}

declare type SignUpParams = {
  firstName?: string;
  lastName?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  dateOfBirth?: string;
  ssn?: string;
  email: string;
  password: string;
};

declare interface signInProps {
  email: string;
  password: string;
}

declare interface FooterProps {
  user: User | null;
  type?: "mobile" | "desktop";
}
