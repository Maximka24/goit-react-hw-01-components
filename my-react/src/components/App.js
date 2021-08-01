import user from "../Data/user.json";
import statisticalData from "../Data/statisticalData.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";

import Profile from './Profile/profile';
import Statistics from './Statistic/statistic';
import Friends from './Friends/friends';
import TransactionHistory from './Transaction/transactionHistory';
import s from './App.module.css';

export default function App() {
  return (
    <div className={s.AppDiv}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        items={statisticalData}
        title="Upload stats"
      />

      <Friends
      
        items={friends}
      />

      <TransactionHistory 
        items={transactions} 
      />
                  
    </div>
  );
}


