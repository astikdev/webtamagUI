import { useLocalSearchParams } from 'expo-router';
import { H3, ScrollView } from 'tamagui';

const IssueDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ScrollView showsVerticalScrollIndicator={false} p="$4" $gtSm={{ p: '$6' }}>
      {id ? (
        <H3>{`Issue Details Screen : ${id}`}</H3>
      ) : (
        <H3>{`Issue Details Screen : null`}</H3>
      )}
    </ScrollView>
  );
};
export default IssueDetails;
