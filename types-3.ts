enum SubStatus
{
    Unknown = 10,
    Curious,
    Subscribed,
    NotSubscribed
}

let subStatus = SubStatus.Subscribed;
console.log(SubStatus[subStatus]);