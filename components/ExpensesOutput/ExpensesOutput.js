import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({ expenses, expensesPeriod, falbackText }) {
  let content = <Text style={styles.infoText}>{falbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      {/*    SUMMARY*/}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {/*    LIST OF EXPENSES*/}
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginTop: 32,
  },
});
