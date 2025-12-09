// import java.lang.Math;
import java.util.Scanner;

public class hellowword {
    public static void main(String[] args) {
          Scanner sc = new Scanner(System.in);
          System.out.println("Nhap so a");
          double a=sc.nextDouble();
          System.out.println("nhap so b");
          double b=sc.nextDouble();
          System.out.println("nhap so c :");
          double c=sc.nextDouble();
          double del= b*b-4*a*c;
          if(del>0){
            System.out.println("phuong trinh co 2 nghiem phan biet");
            double x1= (-b - Math.sqrt(del))/(2*a);
            double x2= (-b + Math.sqrt(del))/(2*a);
            System.out.println("x1 ="+ x1 +"x2 ="+x2);
          }
          else if(del == 0){
            System.out.println("Phuon trinh co nghiem kep");
            double d= -b/2*a;
            System.out.println("Ket qua :"+d);
          }
          else{
            System.out.println("phuong trinh vo nnghiem ");
            
          }
    }
}
