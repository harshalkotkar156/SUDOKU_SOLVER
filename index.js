const n=9;

function isDuplicates(vec)
{
    for(let i=0;i<n;i++)
    {
        
        const row = new Set();
        for(let j=0;j<n;j++)
        {
            if(vec[i][j] !=0  && row.has(vec[i][j])){
                // console.log(`Rows:  i=${i} and j = ${j}`);
                return false;//presnet find duplicate
            }else if(vec[i][j] !=0){
                row.add(vec[i][j]);
            }
        }
    }

    //
    for(let i=0;i<n;i++)
        {
            
            const row = new Set();
            for(let j=0;j<n;j++)
            {
                if(vec[j][i] !=0  && row.has(vec[j][i])){
                    // console.log(`COLUMNS MADHE  : i=${j} and j=${i}`);
                    return false;//presnet find duplicate
                }else if(vec[j][i] !=0){
                    row.add(vec[j][i]);
                }
            }
        }


     
        for(let i=0;i<9;i+=3){

            for(let j=0;j<9;j+=3){

                const box = new Set();
                for(let x=0;x<3;x++){
                    for(let y=0;y<3;y++){
                        
                        if(vec[i+x][j+y] != 0 && box.has(vec[i+x][j+y])){
                            // console.log(`box : at i = ${i+x} and j= ${j+y} `)
                            return false;
                        }else if(vec[i+x][j+y] !=0){
                            box.add(vec[i+x][j+y]);
                        }

                    }
                }

            }
        }


        return true;

}


function isSafe(vec,i,j,num)
{
    for(let k=0;k<9;k++){
        if(vec[i][k] ==num){
            return false;
        }
    }

    for(let k=0;k<9;k++)
    {
        if(vec[k][j] ==num){
            return false;
        }
    }


    let row = Math.floor(i/3) * 3;
    let col = Math.floor(j/3) * 3;

    for(let x=0;x<3;x++){
        for(let y=0;y<3;y++){
            if(vec[row+x][col+y] ==num){
                return false;
            }
        }
    }

    return true;
}

function sudoku(vec,i,j){
    if(i==8 && j==9){
        return true;
    }

    if(j==9){
        i=i+1;
        j=0;
    }

    if(vec[i][j] != 0){
        return sudoku(vec,i,j+1);
    }


    for(let num =1;num<=9;num++)
    {
        if(isSafe(vec,i,j,num)){
            vec[i][j] = num;
            if(sudoku(vec,i,j+1)){
                return true;
            }
        }
        vec[i][j]=0;
    }

    return false;

}

function Noduplicates(vec)
{

}

function print(vec)
{
    for( let i=0;i<9;i++)
        {
            for(let j=0;j<9;j++){
                console.log(vec[i][j]);
                // console.log(typeof(vec[i][j]));
            }
        }
}


// console.log("hello");
function solve(){
let outer = document.querySelector("#outer");
// console.log(outer);

let rows = outer.querySelectorAll(".row")
// console.log(rows);
let vec=[];
for(let r = 0;r<9;r++)
{
    // console.log(rows[r]);
    let inputTag = rows[r].querySelectorAll("input");
    let temp=[];
    for(let col =0;col<9;col++)
    {
        temp.push(Number(inputTag[col].value));
        // temp.push(Number(inputTag[col].value));
    }

    vec.push(temp);
}


console.log("Hello");

// print(vec);


if(isDuplicates(vec)){
    let tempVec = [];
    for(let i=0;i<n;i++){
        let t=[];
        for(let j=0;j<n;j++){
            t.push(vec[i][j]);
        }
        tempVec.push(t);
    }
    
    
    sudoku(vec,0,0);

    for(let r = 0;r<9;r++)
        {
            // console.log(rows[r]);
            let inputTag = rows[r].querySelectorAll("input");
            // let temp=[];
            for(let col =0;col<9;col++)
            {
                if(tempVec[r][col]==0){
                    inputTag[col].style.backgroundColor='green';
                    inputTag[col].value = vec[r][col];
                }
                
                // temp.push(Number(inputTag[col].value));
                // temp.push(Number(inputTag[col].value));
            }
            // vec.push(temp);
        }
    console.log("Solution aaya!");
    
}else{
    let ele = document.querySelector(".invalid");
    // console.log(ele);
    if(ele){
        ele.classList.add("show")
    }
    // ele.textContent = "Invalid Sudoku";
    // console.log("No Solution Available");
}



 


}

document.getElementById('refreshButton').onclick = function() {
    location.reload();
};


