import { FlatList } from "react-native";
import Expenseitem from "./Expenseitem";

function renderExpenseItem(item) {
  return <Expenseitem {...item.item} />;
}
function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}
export default ExpensesList;
