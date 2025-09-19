const BIN_URL="https://api.jsonbin.io/v3/b/68cd7511ae596e708ff409ee";
const API_KEY="$2a$10$lo40o9PxPf3T93acbRmQnea/Q/p0xIEcSNFM7tUtDOFPAu1sE..Rm";
const output=document.getElementById("output");

async function getData(){
    const res = await fetch(BIN_URL,
        {headers: {"X-Master_Key": API_KEY}}
    );

    const data = await res.json();

    const singleAffiliate=data.record.affiliates.map(
        a =>
            `
                <li>
                    ${a.fName} ${a.lName} (${a.isStudent ? "Student" : "Not Student"})
                </li>
            `
    );
}