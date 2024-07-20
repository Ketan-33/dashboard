import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Transactions from "../ui/dashboard/transactions/transactions";
import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "@/app/ui/dashboard/card/card.module.css";

export default function Page() {
  return (
    <div className="flex gap-5 mt-5 w-full">
      <div className="flex-3 flex flex-col gap-5 w-full">
        <div className="flex gap-5 justify-between">
          <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
              <span>Total Users</span>
              <span>6547</span>
            </div>
          </div>
          <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
              <span>Stock</span>
              <span>3456</span>
            </div>
          </div>
          <div className={styles.container}>
            <MdSupervisedUserCircle size={24} />
            <div className={styles.texts}>
              <span>Total Products</span>
              <span>1432</span>
            </div>
          </div>
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
}
