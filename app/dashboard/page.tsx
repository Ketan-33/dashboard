import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Transactions from "../ui/dashboard/transactions/transactions";

export default function Page() {
  return (
    <div className="flex gap-5 mt-5 w-full">
      <div className="flex-3 flex flex-col gap-5 w-full">
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
    </div>
  );
}
